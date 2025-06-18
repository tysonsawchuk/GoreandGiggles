// 🎮 PromptForge Hidden Keyboard Cheats

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "j") {
    alert("🌀 Glitch Mode Activated!");
    document.body.dataset.j1nx = "glitch";
    location.reload();
  }

  if (e.ctrlKey && e.key === "4") {
    alert("🍃 420 Mode Toggled");
    document.body.dataset.j1nx = "420";
    location.reload();
  }

  if (e.ctrlKey && e.key === "x") {
    alert("❌ Null Mode Online");
    document.body.dataset.j1nx = "null";
    location.reload();
  }

  if (e.ctrlKey && e.key === "r") {
    alert("🔥 Rage Mode Enabled");
    document.body.dataset.j1nx = "rage";
    location.reload();
  }

  if (e.ctrlKey && e.key === "p") {
    alert("🔓 Pro Tools Unlocked (TEMP)");
    localStorage.setItem("pro_unlocked", "true");
  }
});
