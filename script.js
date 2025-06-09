
const ideas = [
  {Activity:"Pace while brushing your teeth", Location:"Indoors", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Stand and stretch every hour for 2–3 minutes", Location:"Indoors", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Stretch while your coffee brews", Location:"Indoors", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Wipe down surfaces with disinfectant", Location:"Indoors", Energy:"Low Energy", Domain:"Environmental"},
  {Activity:"Tidy up the cables around your desk", Location:"Indoors", Energy:"Low Energy", Domain:"Environmental"},
  {Activity:"Straighten all shoes and jackets in your entryway", Location:"Indoors", Energy:"Low Energy", Domain:"Environmental"},
  {Activity:"Organize a cluttered drawer", Location:"Indoors", Energy:"Low Energy", Domain:"Mental"},
  {Activity:"Read while standing or pacing", Location:"Indoors", Energy:"Low Energy", Domain:"Mental"},
  {Activity:"Place or remove decor mindfully", Location:"Indoors", Energy:"Low Energy", Domain:"Mental"},
  {Activity:"Write a thank-you card by hand", Location:"Indoors", Energy:"Low Energy", Domain:"Emotional"},
  {Activity:"Set a timer for 7 minutes and pick up litter on your block", Location:"Outdoors", Energy:"Medium Energy", Domain:"Environmental"},
  {Activity:"Pull weeds for 10 minutes", Location:"Outdoors", Energy:"Medium Energy", Domain:"Environmental"},
  {Activity:"Shake out and beat rugs or mats outdoors", Location:"Outdoors", Energy:"High Energy", Domain:"Physical"},
  {Activity:"Water a community garden", Location:"Outdoors", Energy:"Low Energy", Domain:"Environmental"},
  {Activity:"Do a 5-minute gratitude walk", Location:"Outdoors", Energy:"Low Energy", Domain:"Existential"},
  {Activity:"Dance while doing dishes", Location:"At Home", Energy:"High Energy", Domain:"Physical"},
  {Activity:"Take a 5-minute cleaning sprint", Location:"At Home", Energy:"High Energy", Domain:"Environmental"},
  {Activity:"Hang up or fold all clean laundry", Location:"At Home", Energy:"Medium Energy", Domain:"Environmental"},
  {Activity:"Wash windows inside and out", Location:"At Home", Energy:"High Energy", Domain:"Physical"},
  {Activity:"Water houseplants by hand", Location:"At Home", Energy:"Low Energy", Domain:"Environmental"},
  {Activity:"Walk to a coworker instead of emailing", Location:"At Work", Energy:"Low Energy", Domain:"Social"},
  {Activity:"Take a walking brainstorm session", Location:"At Work", Energy:"Medium Energy", Domain:"Mental"},
  {Activity:"Stand during one meeting or call", Location:"At Work", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Stretch while reviewing documents", Location:"At Work", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Carry groceries one bag at a time from the car", Location:"On the Go", Energy:"Medium Energy", Domain:"Physical"},
  {Activity:"Park at the far end of the lot", Location:"On the Go", Energy:"Low Energy", Domain:"Physical"},
  {Activity:"Walk while taking phone calls", Location:"On the Go", Energy:"Low Energy", Domain:"Social"},
  {Activity:"Use stairs instead of elevators/escalators", Location:"On the Go", Energy:"Medium Energy", Domain:"Physical"}
];

let xp = 0;

function generateIdea() {
  const location = document.getElementById('locationFilter').value;
  const energy = document.getElementById('energyFilter').value;
  const domain = document.getElementById('domainFilter').value;

  const filtered = ideas.filter(item =>
    (!location || item.Location === location) &&
    (!energy || item.Energy === energy) &&
    (!domain || item.Domain === domain)
  );

  const resultBox = document.getElementById('result');
  const xpCounter = document.getElementById('xpCounter');

  if (filtered.length) {
    const idea = filtered[Math.floor(Math.random()*filtered.length)];
    resultBox.innerText = idea.Activity;
    xp += 10;
    xpCounter.innerText = `XP: ${xp}`;
    if (xp % 50 === 0) alert("🎉 XP Milestone! You're crushing it!");
  } else {
    resultBox.innerText = "No matching ideas. Try different filters!";
  }
}
