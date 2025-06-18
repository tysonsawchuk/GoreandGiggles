switch (cmd) {
    case "help":
      out.innerHTML = "Commands: <code>vault</code>, <code>skins</code>, <code>clear</code>, <code>reboot</code>, <code>whoami</code>";
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
    case "whoami":
      out.innerHTML = `🪞 You are a filthy prompt addict running PromptForge MONSTER. Glitchy approves.`;
      break;
    default:
      out.innerHTML = `Unknown command: <code>${cmd}</code>`;
      break;
}
