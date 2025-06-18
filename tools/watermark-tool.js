// 🖋️ PromptForge – Watermark Engine (v1)

const WatermarkTool = {
  defaultText: "PromptForge MONSTER",
  font: "12px monospace",
  color: "#888",
  position: "bottom-right", // options: top-left, top-right, bottom-left, bottom-right
  enabled: true,

  applyToCanvas: function (canvas, text = this.defaultText) {
    if (!this.enabled || !canvas || !canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    ctx.font = this.font;
    ctx.fillStyle = this.color;

    const padding = 8;
    let x = padding, y = padding;

    if (this.position.includes("right")) {
      x = canvas.width - ctx.measureText(text).width - padding;
    }

    if (this.position.includes("bottom")) {
      y = canvas.height - padding;
    }

    ctx.fillText(text, x, y);
  },

  setCustom: function ({ text, font, color, position }) {
    if (text) this.defaultText = text;
    if (font) this.font = font;
    if (color) this.color = color;
    if (position) this.position = position;
  }
};
