const fetch = require('node-fetch');

exports.handler = async function (event) {
  try {
    const { scene, age, groupType, sexAct, expression, subject, style, camera, emotion } = JSON.parse(event.body);

    const promptText = `Write a single poetic sentence describing a ${scene} scene. The subject is a ${age} year old in a ${groupType} scene doing ${sexAct}, with a ${expression} expression, ${subject}, styled as: ${style}, camera angle: ${camera}, emotion: ${emotion}. Make it vivid, erotic, emotional, and intense.`;

    const hfResponse = await fetch("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: promptText,
        parameters: { max_new_tokens: 80, return_full_text: false }
      })
    });

    const hfData = await hfResponse.json();

    const output = hfData[0]?.generated_text || "Failed to generate prompt.";
    return {
      statusCode: 200,
      body: JSON.stringify({ prompt: output })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
