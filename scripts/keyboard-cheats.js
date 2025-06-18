// PromptForge MONSTER – Keyboard Shortcut Controls
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "r") {
    // Force hard refresh
    location.reload(true);
  }

  if (e.ctrlKey && e.key === "s") {
    // Quick skin rotate
    const skins = ["smug", "glitch", "rage", "null", "420"];
    const next = skins[Math.floor(Math.random() * skins.length)];
    document.body.setAttribute("data-j1nx", next);
    console.log("🎭 Skin changed to:", next);
  }

  if (e.key === "Escape") {
    // Panic wipe screen
    document.body.innerHTML = "<h1 style='color:red;text-align:center;'>💥 Session Wiped</h1>";
    localStorage.clear();
  }

  if (e.key === "`") {
    alert("👁 PromptForge Dev Console\nUse Ctrl+S to rotate skins\nUse Ctrl+R to reload\nESC to wipe");
  }
});
