// 🧠 PromptForge – Local Prompt History

const PromptHistory = {
  key: "prompt_history",

  save: function (text) {
    if (!text) return;
    const entries = this.load();
    entries.push({
      text,
      time: new Date().toLocaleString()
    });
    localStorage.setItem(this.key, JSON.stringify(entries));
    alert("✅ Prompt saved.");
  },

  load: function () {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (e) {
      return [];
    }
  },

  render: function () {
    const container = document.getElementById("prompt-history");
    if (!container) return;
    container.innerHTML = "";

    this.load().forEach(entry => {
      const div = document.createElement("div");
      div.className = "prompt-entry";
      div.innerHTML = `
        <p><strong>${entry.time}</strong></p>
        <textarea readonly>${entry.text}</textarea>
        <button onclick="navigator.clipboard.writeText('${entry.text.replace(/'/g, "\\'")}')">📋 Copy</button>
      `;
      container.appendChild(div);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  PromptHistory.render();
});
