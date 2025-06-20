document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('terminal-input');
  const output = document.querySelector('.boot-output');
  const vaultButton = document.getElementById('vaultBtn');
  const statsButton = document.getElementById('statsBtn');
  const voiceButton = document.getElementById('voiceToggle');
  let voiceOn = false;

  const responses = {
    help: 'Available commands: help, about, stats, jinx, glitch, rage, smug, null, 420, vault, quit',
    about: 'PromptForge is your dirty little secret for generating wild prompts and AI filth. Built with love and caffeine.',
    stats: '🤖 Daily Prompts: 6,712\n🔥 Active Users: 124\n💾 Vaults Exported: 91',
    vault: 'Vault unlocked. Export initiated...',
    420: 'You’re baked enough to generate now. 🍃',
    glitch: 'Corrupting the prompt stream... 🔥',
    rage: 'J1NX in aggressive mode. Proceed with caution.',
    jinx: 'J1NX online. Let’s cause some chaos.',
    smug: 'SmugLiLJ1NX says: “I already know what you’re going to type.”',
    null: '...Doesn’t matter anyway.',
    quit: 'Session ended. But was it ever real?',
  };

  function respond(cmd) {
    const text = responses[cmd.toLowerCase()] || `Unknown command: ${cmd}`;
    output.innerText += `\n>>> ${cmd}\n${text}\n`;
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (cmd) respond(cmd);
      input.value = '';
    }
  });

  vaultButton.addEventListener('click', () => respond('vault'));
  statsButton.addEventListener('click', () => respond('stats'));
  voiceButton.addEventListener('click', () => {
    voiceOn = !voiceOn;
    voiceButton.textContent = voiceOn ? 'Voice ON' : 'Voice OFF';
    respond(`voice ${voiceOn ? 'activated' : 'muted'}`);
  });
});
