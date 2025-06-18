// 🔁 PromptForge Update Core Engine

const UpdateCore = {
  manifestURL: "./vault/updates.json",
  currentVersion: "1.0.0",

  checkForUpdates: async function () {
    try {
      const res = await fetch(this.manifestURL);
      const data = await res.json();
      if (data.version !== this.currentVersion) {
        console.warn("[PromptForge] New update detected.");
        this.applyUpdate(data);
      } else {
        console.log("[PromptForge] System is current.");
      }
    } catch (err) {
      console.error("Update check failed:", err);
    }
  },

  applyUpdate: function (data) {
    // 🛠️ In future: Fetch updated scripts, replace dynamically
    alert(`🚨 Update Available: ${data.version}\n\nNotes: ${data.notes}`);
    // In real system, we’d auto-load updated modules here
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (UpdateCore.manifestURL) UpdateCore.checkForUpdates();
});
