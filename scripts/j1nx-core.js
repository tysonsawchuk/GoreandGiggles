// J1NX Core: Handles general UI enhancements and glitchy interactions

const J1NXCore = (() => {
  const glitchText = (el, intensity = 3) => {
    const text = el.textContent;
    const glitchy = text.split('').map(char => {
      if (Math.random() < 0.2) {
        return String.fromCharCode(33 + Math.floor(Math.random() * 94));
      }
      return char;
    }).join('');
    el.textContent = glitchy;
    setTimeout(() => (el.textContent = text), intensity * 100);
  };

  const attachGlitchEvents = () => {
    document.querySelectorAll("[data-glitch]").forEach(el => {
      el.addEventListener("mouseenter", () => glitchText(el));
    });
  };

  const init = () => {
    console.log("J1NX Core initialized");
    attachGlitchEvents();
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  J1NXCore.init();
});
