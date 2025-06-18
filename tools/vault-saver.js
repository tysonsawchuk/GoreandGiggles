// 💾 PromptForge – Vault Saver

const VaultSaver = {
  export: function () {
    const data = {
      timestamp: new Date().toISOString(),
      signature: document.getElementById("signatureInput")?.value || "",
      promptHistory: JSON.parse(localStorage.getItem("prompt_history") || "[]"),
      proUnlocked: localStorage.getItem("pro_unlocked") === "true",
      theme: localStorage.getItem("pf_theme") || "dark-hacker"
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "promptforge_vault_backup.json";
    a.click();
    URL.revokeObjectURL(url);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const vaultBtn = document.getElementById("vault-export");
  if (vaultBtn) {
    vaultBtn.addEventListener("click", VaultSaver.export);
  }
});
