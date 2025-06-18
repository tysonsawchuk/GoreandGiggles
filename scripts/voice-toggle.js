// 🔊 PromptForge Voice System (J1NX speaks)

const J1NXVoice = {
  enabled: false,
  voice: null,

  init: function () {
    const toggle = document.getElementById("voice-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      this.enabled = !this.enabled;
      toggle.textContent = this.enabled ? "🔈 Voice ON" : "🔇 Voice OFF";
    });

    // Preload voices
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      this.voice = voices.find(v => v.name.includes("Zira") || v.name.includes("Google") || v.lang === "en-US") || voices[0];
    };
  },

  say: function (text) {
    if (!this.enabled || !this.voice) return;
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = this.voice;
    msg.rate = 1;
    msg.pitch = 1;
    window.speechSynthesis.speak(msg);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  J1NXVoice.init();
});
