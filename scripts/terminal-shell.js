document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("j1nx-terminal");
  if (!terminal || localStorage.getItem("booted") !== "true") return;

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = ">>> type command";
  input.classList.add("terminal-input");
  terminal.appendChild(input);
  input.focus();

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      respond(cmd);
      input.value = "";
    }
  });

  function respond(cmd) {
    const out = document.createElement("p");
    out.classList.add("line");

    switch (cmd) {
      case "help":
        out.innerHTML = "Commands: <code>vault</code>, <code>skins</code>, <code>clear</code>, <code>reboot</code>";
        break;
      case "vault":
        out.innerHTML = "🔐 Opening Vault... <a href='/vault/vault.html'>Go</a>";
        break;
      case "skins":
        out.innerHTML = "🎭 Switch using mood dock below avatar.";
        break;
      case "clear":
        terminal.innerHTML = "";
        return;
      case "reboot":
        localStorage.removeItem("booted");
        location.reload();
        return;
      default:
        out.innerHTML = `Unknown command: <code>${cmd}</code>`;
        break;
    }

    terminal.insertBefore(out, input);
  }
});
