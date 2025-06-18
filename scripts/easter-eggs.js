// 🥚 PromptForge Easter Eggs Engine

const EasterEggs = {
  combos: {
    "J1NX": () => alert("👁️‍🗨️ [J1NX WHISPERS] – You found me, freak."),
    "420": () => {
      alert("🍃 Weed mode activated.");
      document.body.dataset.j1nx = "420";
    },
    "NSFW": () => {
      alert("🔞 Unleashing chaos...");
      localStorage.setItem("pro_unlocked", "true");
      location.reload();
    },
    "RAGE": () => {
      alert("🔥 Rage FX incoming...");
      document.body.classList.add("rage-mode");
    }
  },

  buffer: "",
  timer: null,

  init: function () {
    document.addEventListener("keydown", (e) => {
      this.buffer += e.key.toUpperCase();

      clearTimeout(this.timer);
      this.timer = setTimeout(() => (this.buffer = ""), 2000);

      for (const combo in this.combos) {
        if (this.buffer.endsWith(combo)) {
          this.combos[combo]();
          this.buffer = "";
        }
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  EasterEggs.init();
});
