// 📊 PromptForge Analytics (Local Mode)

const ForgeStats = {
  key: "forge_analytics",

  init: function () {
    const data = JSON.parse(localStorage.getItem(this.key) || "{}");

    data.visits = (data.visits || 0) + 1;
    data.proUnlocks = data.proUnlocks || 0;
    data.promptSaves = data.promptSaves || 0;
    data.lastVisit = new Date().toLocaleString();

    localStorage.setItem(this.key, JSON.stringify(data));

    // Optional console log
    console.log("📊 Visits:", data.visits);
    console.log("🧠 Pro Unlocks:", data.proUnlocks);
    console.log("💾 Prompts Saved:", data.promptSaves);
  },

  increment: function (field) {
    const data = JSON.parse(localStorage.getItem(this.key) || "{}");
    data[field] = (data[field] || 0) + 1;
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  export: function () {
    const data = localStorage.getItem(this.key);
    navigator.clipboard.writeText(data || "{}");
    alert("📊 Stats copied to clipboard.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ForgeStats.init();
});
