// 🤖 J1NX HuggingFace Model Trigger – Direct Token Auth

const HF_TOKEN = "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";
const ENDPOINT = "https://api-inference.huggingface.co/models/your-model-name"; // ⬅ Replace with real model if needed

async function queryHuggingFace(payload = {}) {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);

    const result = await response.json();
    console.log("HF Model Result:", result);
    return result;
  } catch (err) {
    console.error("HuggingFace connection failed:", err.message);
    return null;
  }
}
