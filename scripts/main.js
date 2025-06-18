// 🧠 PromptForge MONSTER – Core Script

document.addEventListener("DOMContentLoaded", () => {
  console.log("PromptForge MONSTER initialized.");

  // Activate footer link tracking
  const footerLinks = document.querySelectorAll("footer a");
  footerLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`User clicked: ${link.href}`);
    });
  });

  // Load AdSense manually if needed
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.warn("AdSense failed to load:", e);
  }

  // Light boot animation effect
  const body = document.querySelector("body");
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.transition = "opacity 1s ease-in";
    body.style.opacity = 1;
  }, 100);
});
