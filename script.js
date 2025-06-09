
let ideas = [];
let xp = 0;

fetch('ideas.json')
  .then(response => response.json())
  .then(data => {
    ideas = data;
  });

function generateIdea() {
  const location = document.getElementById('locationFilter').value;
  const energy = document.getElementById('energyFilter').value;
  const domain = document.getElementById('domainFilter').value;

  const filtered = ideas.filter(item =>
    (!location || item.Location === location) &&
    (!energy || item["Energy Level"] === energy) &&
    (!domain || item["PEEMES Domain"] === domain)
  );

  const resultBox = document.getElementById('result');
  const xpCounter = document.getElementById('xpCounter');

  if (filtered.length > 0) {
    const idea = filtered[Math.floor(Math.random() * filtered.length)];
    resultBox.innerText = idea.Activity;

    // Reward XP
    xp += 10;
    xpCounter.innerText = `XP: ${xp}`;

    // Confetti animation
    if (xp % 50 === 0) {
      alert("🎉 XP Milestone! You're crushing it! 🎉");
    }
  } else {
    resultBox.innerText = "No matching ideas. Try different filters!";
  }
}
