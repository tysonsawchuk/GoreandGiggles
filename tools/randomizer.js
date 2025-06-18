// 🎲 PromptForge – Prompt Randomizer Tool

const PromptRandomizer = {
  pick: function (list = []) {
    if (!Array.isArray(list) || list.length === 0) return null;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  },

  shuffle: function (list = []) {
    if (!Array.isArray(list)) return [];
    return list
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  },

  pickMultiple: function (list = [], count = 3) {
    return PromptRandomizer.shuffle(list).slice(0, count);
  }
};

// 🧪 Example Usage (dev only)
// console.log("🎲 Prompt:", PromptRandomizer.pick(["nude", "cyber", "slime", "glitch-core"]));
