// 🧩 PromptForge DLC Loader

const DLCLoader = {
  load: async function () {
    try {
      const res = await fetch("./vault/expansions/dlc-index.json");
      const packs = await res.json();

      packs.forEach(pack => {
        const item = document.createElement("li");
        item.innerHTML = `
          <strong>${pack.name}</strong> – ${pack.desc}
          <button onclick="DLCLoader.loadPack('${pack.file}')">Load</button>
        `;
        document.getElementById("dlc-list").appendChild(item);
      });

    } catch (err) {
      console.warn("🧩 No DLC found or malformed index.");
    }
  },

  loadPack: async function (filename) {
    try {
      const res = await fetch(`./vault/expansions/${filename}`);
      const json = await res.json();
      alert(`✅ Loaded: ${json.name}`);
      console.log(json);
      // TODO: inject into prompt builder or theme loader
    } catch (e) {
      alert("❌ DLC failed to load.");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("dlc-list")) DLCLoader.load();
});
