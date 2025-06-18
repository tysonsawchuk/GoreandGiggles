// ✍️ PromptForge – Signature Box Tool

const SignatureBox = {
  canvas: null,
  ctx: null,

  init: function () {
    this.canvas = document.getElementById("outputCanvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    document.getElementById("signatureInput").addEventListener("input", this.drawSignature.bind(this));
  },

  drawSignature: function () {
    const text = document.getElementById("signatureInput").value;
    if (!this.ctx) return;

    // Refresh image from backup? (optional if layered drawing)
    this.ctx.font = "20px monospace";
    this.ctx.fillStyle = "#ffffffcc";
    this.ctx.textAlign = "right";
    this.ctx.fillText(text, this.canvas.width - 20, this.canvas.height - 40);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  SignatureBox.init();
});
