// 📘 PromptForge – Micro Help + Tooltip Engine (Global)

const HelpSystem = {
  enabled: true,
  data: {
    "index.html": "Welcome to PromptForge MONSTER. Choose a J1NX mode to begin generating dirty prompts.",
    "j1nx-smug.html": "This is Smug Mode. Expect sass, sarcasm, and confident prompt results.",
    "j1nx-glitch.html": "Glitch Mode injects instability and chaos into your prompts.",
    "j1nx-null.html": "Null Mode disables emotion. Prompts will be literal and dry.",
    "j1nx-rage.html": "Rage Mode is aggressive, unfiltered, and best for extreme themes.",
    "j1nx-420.html": "420 Mode slows things down and adds surreal, trippy logic to prompts."
  },
  getHelp: function (page) {
    return this.data[page] || "No help available for this page.";
  }
};

function showHelpForCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  const msg = HelpSystem.getHelp(path);
  alert(msg);
}
