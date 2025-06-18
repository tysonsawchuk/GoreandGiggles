// J1NX HuggingFace Connect: Real structure, no BS.
// To go live, plug in your model + token where marked.

const HF_ENDPOINT = "https://api-inference.huggingface.co/models/your-model-name";
const HF_TOKEN = "Bearer YOUR_SECRET_TOKEN"; // Replace this securely!

async function queryHuggingFace(promptText) {
  if (!promptText || promptText.trim().length < 3) {
    console.warn("Invalid prompt sent to HF connector.");
    return;
  }

  const headers = {
    "Authorization": HF_TOKEN,
    "Content-Type": "application/json"
  };

  const payload = {
    inputs: promptText
  };

  try {
    const response = await fetch(HF_ENDPOINT, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error("HF request failed:", response.status, await response.text());
      return null;
    }

    const data = await response.json();
    console.log("🔁 HF Result:", data);
    return data;
  } catch (err) {
    console.error("🔥 HF connection error:", err);
    return null;
  }
}

// Example test call (remove in production):
// queryHuggingFace("Write a dirty prompt for a glitchy AI named J1NX.");
