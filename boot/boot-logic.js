// PromptForge MONSTER – Bootline Sequence
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
  ];

  let i = 0;
  const delay = 800;

  const writeLine = () => {
    if (i >= lines.length) return;
    const p = document.createElement("p");
    p.textContent = lines[i++];
    boot.appendChild(p);
    setTimeout(writeLine, delay);
  };

  writeLine();
});
