// 🔁 PromptForge Boot Sequence Logic

const BootLogic = {
  lines: [
    "Initializing MONSTER shell...",
    "Authenticating dirty modules...",
    "Injecting forbidden fetishes...",
    "Bypassing safe mode 🔓",
    "Connecting to J1NX personality core...",
    "420 protocol... 🍃 ACTIVE",
    "Glitch loop engaged 🌀",
    "System ready. Deploy chaos."
  ],

  delay: 420,
  containerId: "boot-sequence",
  typingIndex: 0,

  start: function () {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const nextLine = () => {
      if (this.typingIndex >= this.lines.length) return;
      const p = document.createElement("p");
      p.textContent = this.lines[this.typingIndex];
      container.appendChild(p);
      this.typingIndex++;
      setTimeout(nextLine, this.delay);
    };

    nextLine();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  BootLogic.start();
});
