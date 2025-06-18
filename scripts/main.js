document.addEventListener("DOMContentLoaded", function () {
  const forgeButton = document.getElementById("generate-prompt");
  const output = document.getElementById("output");
  const textarea = document.getElementById("prompt-input");

  forgeButton.addEventListener("click", () => {
    const raw = textarea.value.trim();

    if (!raw) {
      output.innerHTML = "<p class='glitch-error'>⚠️ Enter something, sicko.</p>";
      return;
    }

    const result = mutatePrompt(raw);
    output.innerHTML = `
      <div class="glitch-result">${result}</div>
      <div class="glitch-note">📤 Saved to vault (not really, yet)</div>
    `;
    glitchFlash(output);
  });
});

function mutatePrompt(text) {
  const chaos = [
    "💥 Explodes into glitter",
    "👀 Eye contact locked",
    "🔥 Adds sweat, oil, chaos",
    "💋 NSFW intensity ++",
    "⚡ Glitched mood shift",
    "🔒 Vault-ready eroticism"
  ];

  const flavor = chaos[Math.floor(Math.random() * chaos.length)];
  return `${text} — ${flavor}`;
}

function glitchFlash(el) {
  el.classList.remove("flash");
  void el.offsetWidth; // trigger reflow
  el.classList.add("flash");
}
