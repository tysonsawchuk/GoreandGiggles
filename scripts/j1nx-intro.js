document.addEventListener('DOMContentLoaded', function () {
  const mascot = document.getElementById('mascot');
  const speech = document.getElementById('mascot-speech');

  const phrases = [
    'Welcome back, meatbag.',
    'I scanned your vault. It’s weird in there.',
    'Generating chaos core...',
    'Ready to corrupt reality.',
    'Your prompt kink is showing.'
  ];

  if (mascot && speech) {
    mascot.classList.add('visible');
    speech.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  }
});
