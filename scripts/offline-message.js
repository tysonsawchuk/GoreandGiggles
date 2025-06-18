// 📴 PromptForge – Offline Detection & Fallback

const OfflineWatcher = {
  init: function () {
    window.addEventListener("offline", () => {
      OfflineWatcher.showMsg("🚫 You're offline! Vault tools and local prompts only.");
    });

    window.addEventListener("online", () => {
      OfflineWatcher.showMsg("✅ You're back online!");
    });
  },

  showMsg: function (text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.cssText = `
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: #222;
      color: #fff;
      padding: 10px 20px;
      font-family: monospace;
      font-size: 14px;
      border: 2px solid lime;
      z-index: 9999;
    `;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  OfflineWatcher.init();
});
