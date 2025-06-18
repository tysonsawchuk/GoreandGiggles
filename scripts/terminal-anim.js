document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("j1nx-terminal");
  if (!terminal) return;

  const messages = [
    "[ J1NX AI CORE ONLINE ]",
    "[ 🧠 Injecting Chaos Routine ]",
    "[ 🔒 NSFW Blocker: Bypassed ✅ ]",
    "[ 👁 Eye contact locked ]",
    "[ 📦 Vault integrity: 98% ]",
    "[ ☠️ Prompts leaked: 420 ]",
    "[ SYSTEM IDLE — READY FOR CORRUPTION ]"
  ];

  let i = 0;

  const loop = () => {
    const p = document.createElement("p");
    p.classList.add("line");
    p.textContent = "> " + messages[i % messages.length];
    terminal.appendChild(p);
    i++;

    // Limit to last 6 entries
    while (terminal.children.length > 6) {
      terminal.removeChild(terminal.firstChild);
    }

    setTimeout(loop, 5000);
  };

  // Wait until boot is done
  if (localStorage.getItem("booted") === "true") {
    setTimeout(loop, 3000);
  }
});
