// Bootline Display Script – simulates terminal-style loading

const bootSequence = [
  ">> Initializing PromptForge MONSTER...",
  ">> Injecting J1NX protocols...",
  ">> Verifying NSFW layer...",
  ">> Loading 420 mode...",
  ">> Systems online. Enter the playground."
];

let currentLine = 0;
const delay = 750;

function showNextBootLine() {
  const container = document.getElementById("boot-sequence");
  if (!container || currentLine >= bootSequence.length) return;

  const line = document.createElement("div");
  line.textContent = bootSequence[currentLine++];
  container.appendChild(line);
  setTimeout(showNextBootLine, delay);
}

document.addEventListener("DOMContentLoaded", showNextBootLine);
