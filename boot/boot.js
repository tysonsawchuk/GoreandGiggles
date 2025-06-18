// 🚀 PromptForge MONSTER Bootline Sequence
// Creates animated boot output like a terminal feed

const bootLines = [
  ">> Initializing PromptForge MONSTER...",
  ">> Injecting J1NX core...",
  ">> Verifying NSFW module...",
  ">> Syncing with HuggingFace endpoint...",
  ">> Backlink network deployed...",
  ">> Ad system... detected...",
  ">> Status: 🟢 Online. Proceed to select a mode."
];

function typeBootLines(containerId = "boot-sequence", delay = 800) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let index = 0;

  function next() {
    if (index < bootLines.length) {
      const line = document.createElement("div");
      line.textContent = bootLines[index++];
      container.appendChild(line);
      setTimeout(next, delay);
    }
  }

  next();
}

document.addEventListener("DOMContentLoaded", () => typeBootLines());
