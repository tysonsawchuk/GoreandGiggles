function generatePrompt() {
  const model = document.getElementById("model").value;
  const age = document.getElementById("age").value;
  const tone = document.getElementById("tone").value;

  const prompt = `Model: ${model}\nAge: ${age}\nTone: ${tone}\n\nImagine a stunning composition blending elegance and edge.`;
  const negative = `blurry, cropped, watermark, error, extra limbs, bad hands, low quality`;

  document.getElementById("poeticPrompt").innerText = prompt;
  document.getElementById("negativePrompt").innerText = `Negative Prompt: ${negative}`;
}

function copyPrompt() {
  const content = document.getElementById("poeticPrompt").innerText;
  if (!content) return alert("Nothing to copy");
  navigator.clipboard.writeText(content);
  alert("Copied to clipboard!");
}
