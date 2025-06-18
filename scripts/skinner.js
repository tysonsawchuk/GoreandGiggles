// 🎨 PromptForge Skin Rotator

const Skinner = {
  current: "dark-hacker",

  set: function (theme) {
    document.body.className = theme;
    localStorage.setItem("pf_theme", theme);
    this.current = theme;
  },

  init: function () {
    const saved = localStorage.getItem("pf_theme");
    if (saved) this.set(saved);

    const menu = document.getElementById("skin-menu");
    if (menu) {
      menu.addEventListener("change", (e) => {
        this.set(e.target.value);
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Skinner.init();
});
