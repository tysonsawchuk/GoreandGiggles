// 🖋️ PromptForge – Custom Watermark Tool

const WatermarkTool = {
  enabled: false,
  img: null,
  canvas: null,
  ctx: null,

  init: function () {
    this.canvas = document.getElementById("outputCanvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    document.getElementById("watermarkInput").addEventListener("change", this.loadWatermark.bind(this));
    document.getElementById("applyWatermark").addEventListener("click", this.renderWatermark.bind(this));
  },

  loadWatermark: function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      this.img = new Image();
      this.img.src = evt.target.result;
      this.img.onload = () => {
        this.enabled = true;
        alert("✅ Watermark ready. Click apply.");
      };
    };
    reader.readAsDataURL(file);
  },

  renderWatermark: function () {
    if (!this.enabled || !this.img || !this.ctx) return;
    const x = this.canvas.width - this.img.width - 20;
    const y = this.canvas.height - this.img.height - 20;
    this.ctx.drawImage(this.img, x, y);
    alert("✅ Watermark applied!");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  WatermarkTool.init();
});
