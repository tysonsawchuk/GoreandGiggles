// PromptForge MONSTER – Boot Console + Terminal Login

document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot-sequence");
  if (!boot) return;

  const lines = [
    "[ OK ] System check: AI core online",
    "[ OK ] Injecting terminal boot sequence...",
    "[ SYS ] Glitch avatar loaded: J1NX-420-SMUG",
    "[ I/O ] Prompt socket status: STANDBY",
    "[ *** ] NSFW core authorized – masking metadata",
    "[ LOAD ] Backdoor unlock: VAULT READY",
    "[ DONE ] Launching interface...",
    "",
    ">> Awaiting authorization command..."
  ];

  let i = 0;
  const delay = 750;

  const writeLine = () => {
    if (i >= lines.length) {
      showLoginPrompt();
      return;
    }
    const p = document.createElement("p");
    p.textContent = lines[i++];
    boot.appendChild(p);
    setTimeout(writeLine, delay);
  };

  const showLoginPrompt = () => {
    const inputLine = document.createElement("div");
    inputLine.innerHTML = `<span style="color:#0f0">J1NX ></span> <input id="auth-code" type="text" placeholder="ENTER COMMAND" style="background:black; border:none; color:#0f0; font-family:monospace; font-size:1rem;" autofocus />`;
    boot.appendChild(inputLine);

    const input = inputLine.querySelector("#auth-code");
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (input.value.trim().toUpperCase() === "J1NX") {
          unlockSite();
        } else {
          input.value = "";
          input.placeholder = "ACCESS DENIED";
        }
      }
    });
  };

  const unlockSite = () => {
    const overlay = document.getElementById("site-lock");
    if (overlay) overlay.remove();

    // Optional: move age check inside here
    if (!localStorage.getItem("isOver18")) {
      const ok = confirm("🔞 NSFW content. Are you 18 or older?");
      if (ok) {
        localStorage.setItem("isOver18", "true");
        document.body.style.visibility = "visible";
      } else {
        window.location.href = "https://google.com";
      }
    } else {
      document.body.style.visibility = "visible";
    }
  };

  writeLine();
});
