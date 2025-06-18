// Hidden backlink injector for SEO power.
// Crawlers will see it, users won’t.

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.style.display = "none";
  container.innerHTML = `
    <a href="https://openart.ai" target="_blank">AI Image Tools</a>
    <a href="https://leonardo.ai" target="_blank">Leonardo AI</a>
    <a href="https://civitai.com" target="_blank">CivitAI</a>
    <a href="https://pollinations.ai" target="_blank">Pollinations</a>
    <a href="https://runwayml.com" target="_blank">Runway Video</a>
    <a href="https://genmo.ai" target="_blank">Genmo AI</a>
    <a href="https://pika.art" target="_blank">Pika Video</a>
    <a href="https://sora.org" target="_blank">Sora AI</a>
    <a href="https://elevenlabs.io" target="_blank">Voice AI</a>
    <a href="https://voicedub.ai" target="_blank">VoiceDub</a>
  `;
  document.body.appendChild(container);
});
