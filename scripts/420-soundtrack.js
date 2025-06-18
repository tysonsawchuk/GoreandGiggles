// 🍃 420 Mode Chilltrack

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.j1nx !== "420") return;

  const audio = document.createElement("audio");
  audio.src = "./assets/420_loop.mp3";
  audio.loop = true;
  audio.volume = 0.2;
  audio.autoplay = true;

  const muteBtn = document.createElement("button");
  muteBtn.textContent = "🔇 Mute 420 Beats";
  muteBtn.style.position = "fixed";
  muteBtn.style.bottom = "10px";
  muteBtn.style.right = "10px";
  muteBtn.style.zIndex = "9999";

  muteBtn.onclick = () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔈 Unmute 420 Beats" : "🔇 Mute 420 Beats";
  };

  document.body.appendChild(audio);
  document.body.appendChild(muteBtn);
});
