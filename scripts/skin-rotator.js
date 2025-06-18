// 🎭 Skin Rotator – Rotate J1NX UI Skins on Launch or Timer

const SkinRotator = {
  skins: ["dark-hacker", "glitch-glow", "bloodlust", "neon-mint"],
  delayMs: 30000, // Rotate every 30s

  init: function () {
    // On load, pick random
    const pick = this.skins[Math.floor(Math.random() * this.skins.length)];
    document.body.className = pick;
    localStorage.setItem("pf_theme", pick);

    // Optional: auto rotate every 30s
    setInterval(() => {
      const next = this.skins[Math.floor(Math.random() * this.skins.length)];
      document.body.className = next;
      localStorage.setItem("pf_theme", next);
    }, this.delayMs);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  SkinRotator.init();
});
