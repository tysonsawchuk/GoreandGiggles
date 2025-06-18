// 🧷 Inject invisible backlink grid for SEO spidering
// Not visible to users – only to crawlers

document.addEventListener("DOMContentLoaded", () => {
  const links = [
    { text: "OpenArt", url: "https://openart.ai" },
    { text: "Leonardo AI", url: "https://leonardo.ai" },
    { text: "CivitAI", url: "https://civitai.com" },
    { text: "Pollinations", url: "https://pollinations.ai" },
    { text: "Runway", url: "https://runwayml.com" },
    { text: "Genmo", url: "https://genmo.ai" },
    { text: "Pika", url: "https://pika.art" },
    { text: "Sora AI", url: "https://sora.org" },
    { text: "ElevenLabs", url: "https://elevenlabs.io" },
    { text: "VoiceDub", url: "https://voicedub.ai" }
  ];

  const container = document.createElement("div");
  container.style.display = "none";

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;
    a.rel = "nofollow";
    container.appendChild(a);
  });

  document.body.appendChild(container);
});
