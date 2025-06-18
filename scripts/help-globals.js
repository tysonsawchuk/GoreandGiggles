// 📚 PromptForge Micro Help System

const HelpSystem = {
  topics: {
    "prompt": "Write clear, detailed prompts. Use commas to separate ideas. Add colors, styles, lighting.",
    "nsfw": "Enable NSFW mode in monster dropdowns. Customize tone with dirty keywords or intense tags.",
    "420": "Activates chill mode. Enables music, green glow, stoner prompts, and weed-themed art sets.",
    "watermark": "Upload your own image as watermark in Pro Tools section. It will overlay on canvas output.",
    "signature": "Type your name or brand in the signature box. It’ll show on bottom right of generated art.",
    "glitchy": "Glitch mode triggers chaos visuals and mascot FX. Use keyboard: Ctrl + J to toggle."
  },

  show: function (key) {
    const msg = this.topics[key];
    if (!msg) {
      alert("❓ No help available for: " + key);
    } else {
      alert("🧠 Help: " + msg);
    }
  }
};
