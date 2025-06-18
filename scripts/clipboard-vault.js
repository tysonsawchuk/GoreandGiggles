document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copy-stats");
  const exportBtn = document.getElementById("export-vault");
  const output = document.getElementById("output");

  copyBtn.addEventListener("click", () => {
    const content = output.textContent.trim();
    if (!content) {
      alert("❌ Nothing to copy!");
      return;
    }

    navigator.clipboard.writeText(content).then(() => {
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => copyBtn.textContent = "📈 Copy Stats", 1200);
    });
  });

  exportBtn.addEventListener("click", () => {
    const blob = new Blob([output.textContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "j1nx-vault.txt";
    a.click();
    URL.revokeObjectURL(url);
    exportBtn.textContent = "✅ Exported!";
    setTimeout(() => exportBtn.textContent = "💾 Export Vault", 1500);
  });
});
