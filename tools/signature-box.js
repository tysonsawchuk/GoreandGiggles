// ✒️ PromptForge – Signature Box Overlay Tool

const SignatureBox = {
  enabled: true,
  userSignature: "Created with PromptForge 🔥",
  font: "italic 14px serif",
  color: "#ff69b4",
  opacity: 0.9,
  align: "center", // options: left, center, right

  render: function (containerId = "signature-container") {
    if (!this.enabled) return;

    const target = document.getElementById(containerId);
    if (!target) return;

    const sig = document.createElement("div");
    sig.className = "signature-box";
    sig.innerText = this.userSignature;

    sig.style.font = this.font;
    sig.style.color = this.color;
    sig.style.opacity = this.opacity;
    sig.style.textAlign = this.align;
    sig.style.padding = "6px 12px";
    sig.style.marginTop = "10px";

    target.appendChild(sig);
  },

  setSignature(text = "", options = {}) {
    if (text) this.userSignature = text;
    Object.assign(this, options);
  }
};
