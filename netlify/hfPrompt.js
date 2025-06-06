const fetch = require('node-fetch');

exports.handler = async function(event) {
  const HF_TOKEN = process.env.HF_TOKEN;
  const body = JSON.parse(event.body || '{}');
  const userInput = body.prompt || "Describe a cat with wings";

  const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: userInput })
  });

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: "Hugging Face request failed" }),
    };
  }

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ result: data }),
  };
};
