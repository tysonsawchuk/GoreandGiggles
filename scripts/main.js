document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot-sequence");
  if (boot) {
    boot.textContent = ">> PromptForge MONSTER initialized...\n>> Loading J1NX personality...\n>> Status: Online.";
  }

  // Optional: trigger animations or hooks here
  console.log("PromptForge main script loaded.");
});
