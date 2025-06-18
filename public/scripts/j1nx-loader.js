// J1NX Loader: Initializes character selection and default state

window.j1nxLoader = {
  currentMode: "smug",
  availableModes: ["smug", "glitch", "null", "rage", "420"],
  
  init: function () {
    console.log(`J1NX Mode: ${this.currentMode}`);
    document.body.setAttribute("data-j1nx", this.currentMode);
  },

  switchMode: function (newMode) {
    if (this.availableModes.includes(newMode)) {
      this.currentMode = newMode;
      document.body.setAttribute("data-j1nx", newMode);
      console.log(`Switched to J1NX Mode: ${newMode}`);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  j1nxLoader.init();
});
