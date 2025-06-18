document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("body");
  if (!root) return;

  window.setMood = function (mode) {
    const valid = ["smug", "glitch", "null", "rage", "420"];
    if (valid.includes(mode)) {
      root.setAttribute("data-j1nx", mode);
      console.log(`🎭 Skin set to: ${mode}`);
    } else {
      console.warn("Invalid skin mode:", mode);
    }
  };

  // Optional auto restore from localStorage
  const saved = localStorage.getItem("j1nxSkin");
  if (saved) root.setAttribute("data-j1nx", saved);

  // Track mode changes
  const observer = new MutationObserver(() => {
    const mode = root.getAttribute("data-j1nx");
    localStorage.setItem("j1nxSkin", mode);
  });

  observer.observe(root, { attributes: true, attributeFilter: ["data-j1nx"] });
});
