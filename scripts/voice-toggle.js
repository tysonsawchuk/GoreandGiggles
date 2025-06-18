document.addEventListener("DOMContentLoaded", () => {
  const voiceBtn = document.getElementById("voice-toggle");
  const outputBox = document.getElementById("output");
  if (!voiceBtn || !outputBox) return;

  let voiceState = localStorage.getItem("voiceSetting") || "off";
  updateButton(voiceState);

  voiceBtn.addEventListener("click", () => {
    voiceState = voiceState === "on" ? "off" : "on";
    localStorage.setItem("voiceSetting", voiceState);
    updateButton(voiceState);
  });

  function updateButton(state) {
    if (state === "on") {
      voiceBtn.textContent = "🔊 Voice ON";
      voiceBtn.style.backgroundColor = "#0f0";
      voiceBtn.style.color = "#000";
    } else {
      voiceBtn.textContent = "🔇 Voice OFF";
      voiceBtn.style.backgroundColor = "#111";
      voiceBtn.style.color = "#0ff";
    }
  }

  // Observer to read results out loud
  const observer = new MutationObserver(() => {
    if (voiceState === "on") {
      const text = outputBox.textContent.trim();
      if (text && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1;
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
      }
    }
  });

  observer.observe(outputBox, { childList: true });
});
