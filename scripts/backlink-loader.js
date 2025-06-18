// PromptForge MONSTER – Backlink Injection Grid
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const backlinkBlock = document.createElement("div");
  backlinkBlock.style.display = "none";
  backlinkBlock.innerHTML = `
    <a href="https://openart.ai" target="_blank">OpenArt</a>
    <a href="https://leonardo.ai" target="_blank">Leonardo</a>
    <a href="https://civitai.com" target="_blank">CivitAI</a>
    <a href="https://pollinations.ai" target="_blank">Pollinations</a>
    <a href="https://runwayml.com" target="_blank">Runway</a>
    <a href="https://genmo.ai" target="_blank">Genmo</a>
    <a href="https://pika.art" target="_blank">Pika</a>
    <a href="https://sora.com" target="_blank">Sora</a>
    <a href="https://elevenlabs.io" target="_blank">ElevenLabs</a>
    <a href="https://voicedub.ai" target="_blank">VoiceDub</a>
  `;
  footer.appendChild(backlinkBlock);
});
