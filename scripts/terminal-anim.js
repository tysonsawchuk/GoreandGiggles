document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("j1nx-terminal");
  const output = document.getElementById("output");
  const avatarBox = document.getElementById("j1nx-avatar-box");

  // Already booted?
  if (localStorage.getItem("booted") === "true") {
    terminal.style.display = "block";
    avatarBox.style.display = "block";
    return;
  }

  // Start animation
  const lines = [
    ">>> Booting PROMPTFORGE CORE...",
    ">>> Injecting J1NX personality layer...",
    ">>> Loading forbidden NSFW modules...",
    ">>> Scanning dark prompt cache...",
    ">>> Sync complete. Terminal unlocked.",
    ">>> Type help to begin."
  ];

  let i = 0;

  function writeLine() {
    if (i >= lines.length) {
      terminal.style.display = "block";
      avatarBox.style.display = "block";
      localStorage.setItem("booted", "true");
      return;
    }

    const line = document.createElement("p");
    line.className = "line";
    line.textContent = lines[i++];
    output.appendChild(line);

    setTimeout(writeLine, 800);
  }

  terminal.style.display = "none";
  avatarBox.style.display = "none";
  writeLine();
});
