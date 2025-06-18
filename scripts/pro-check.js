// 🔓 Pro Unlock Detection

const ProCheck = {
  key: "pro_unlocked",

  isPro: function () {
    return localStorage.getItem(this.key) === "true";
  },

  unlock: function () {
    localStorage.setItem(this.key, "true");
    alert("✅ Pro mode is now active.");
    this.updateUI();
  },

  updateUI: function () {
    if (this.isPro()) {
      document.querySelectorAll(".pro-only").forEach(el => {
        el.style.display = "block";
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ProCheck.updateUI();
});
