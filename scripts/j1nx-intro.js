// 🌀 J1NX Mascot Intro Animation

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.createElement("div");
  splash.id = "j1nx-splash";
  splash.innerHTML = `
    <img src="./assets/j1nx_intro.gif" alt="J1NX" />
    <p class="boot-msg">[ J1NX initializing... ]</p>
  `;
  document.body.appendChild(splash);

  splash.style.position = "fixed";
  splash.style.top = "0";
  splash.style.left = "0";
  splash.style.width = "100%";
  splash.style.height = "100%";
  splash.style.backgroundColor = "#000";
  splash.style.display = "flex";
  splash.style.flexDirection = "column";
  splash.style.justifyContent = "center";
  splash.style.alignItems = "center";
  splash.style.zIndex = "9999";
  splash.style.color = "#0f0";
  splash.style.fontFamily = "monospace";

  setTimeout(() => {
    splash.remove();
  }, 4200); // 👈 Show for 4.2 seconds then vanish
});
