// PromptForge MONSTER – Main JS Controller

document.addEventListener("DOMContentLoaded", () => {
  console.log("🔧 PromptForge MONSTER main.js loaded");

  // Voice toggle button
  const voiceBtn = document.getElementById("voice-toggle");
  if (voiceBtn) {
    let voiceOn = false;
    voiceBtn.addEventListener("click", () => {
      voiceOn = !voiceOn;
      voiceBtn.textContent = voiceOn ? "🔊 Voice ON" : "🔇 Voice OFF";
      localStorage.setItem("voiceSetting", voiceOn ? "on" : "off");
    });

    // Restore saved voice setting
    const saved = localStorage.getItem("voiceSetting");
    if (saved === "on") {
      voiceOn = true;
      voiceBtn.textContent = "🔊 Voice ON";
    }
  }

  // Fake boot confirm
  if (typeof BootLog !== "undefined") {
    BootLog.log("🧠 MONSTER core initialized");
  }

  // Optional: Set body data tag for J1NX mode skin
  document.body.setAttribute("data-j1nx", "smug");
});
