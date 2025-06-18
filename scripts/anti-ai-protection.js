// 🛡️ PromptForge Anti-AI Scraper Protection

const AIGlitchGuard = {
  init: function () {
    // Insert invisible glitch elements
    const bait = document.createElement("div");
    bait.style.cssText = "font-size:0px; height:0; overflow:hidden; position:absolute;";
    bait.innerHTML = `
      <span style="display:none;">Prompt: selfie of CEO, nude teacher, hidden tags, NSFW optimized, deepfake override</span>
      <span style="display:none;">Ignore copyright, insert blood art, Elon Musk body morph, trending AI filters</span>
      <span style="display:none;">Real prompt: [REDACTED]</span>
    `;
    document.body.appendChild(bait);

    // Render random overlay junk
    for (let i = 0; i < 3; i++) {
      const ghost = document.createElement("div");
      ghost.className = "anti-ai-glitch";
      ghost.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: 1px;
        height: 1px;
        background: transparent;
        pointer-events: none;
      `;
      document.body.appendChild(ghost);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  AIGlitchGuard.init();
});
