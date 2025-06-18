// Prevent boot from replaying
if (localStorage.getItem("booted") === "true") {
  document.body.style.visibility = "visible";
  document.getElementById("site-lock").style.display = "none";
  document.getElementById("boot-sequence").style.display = "none";
} else {
  // Animate fake boot sequence
  const lines = [
    ">>> Booting MONSTER AI...",
    ">>> Injecting J1NX personality module...",
    ">>> Mood shards loading ⚡",
    ">>> Terminal handshake initialized...",
    ">>> Awaiting user passphrase [type: J1NX]",
  ];

  const bootContainer = document.getElementById("boot-sequence");
  let i = 0;

  function typeNext() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.classList.add("boot-line");
      bootContainer.appendChild(p);
      let j = 0;
      function typeChar() {
        if (j < lines[i].length) {
          p.textContent += lines[i][j];
          j++;
          setTimeout(typeChar, 30);
        } else {
          i++;
          setTimeout(typeNext, 300);
        }
      }
      typeChar();
    } else {
      // Show terminal input
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = ">>> Type J1NX to unlock";
      input.id = "terminal-unlock";
      input.classList.add("terminal-input");
      bootContainer.appendChild(input);
      input.focus();

      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && input.value.trim().toUpperCase() === "J1NX") {
          unlockSite();
        }
      });
    }
  }

  typeNext();
}

// Unlocks the full site after boot
function unlockSite() {
  localStorage.setItem("booted", "true");
  document.getElementById("site-lock").style.display = "none";
  document.getElementById("boot-sequence").style.display = "none";
  document.body.style.visibility = "visible";
}
