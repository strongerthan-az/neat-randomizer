
const indoorIdeas = [
  "Organize two drawers in a row",
  "Wipe down all kitchen counters and appliances",
  "Vacuum or sweep one full room thoroughly",
  "Declutter and wipe down a bathroom cabinet",
  "Stand and fold an entire load of laundry",
  "Mop the floor of a bathroom or kitchen",
  "Do a 10-minute room reset (reset pillows, tables, tidying)",
  "Reorganize a shelf and dust everything on it",
  "Stretch while watching 15 minutes of a show",
  "Wash and dry a full sink of dishes by hand",
  "Dust the baseboards in one full room",
  "Wipe fingerprints off doors, switches, and handles",
  "Shake out rugs and mats and sweep underneath them",
  "Clean out and organize your fridge door shelves",
  "Disinfect remotes, keyboards, and phones",
  "Sort and put away a pile of miscellaneous clutter",
  "Reorganize your closet shoes and wipe the floor underneath",
  "Water all indoor plants and check their leaves",
  "Do a focused 15-minute decluttering sprint",
  "Rotate and fluff couch cushions, vacuum underneath",
  "Clean mirrors and interior glass surfaces",
  "Change your bed sheets and pillowcases",
  "Take out every trash bin in the home and replace liners",
  "Clean out your purse, backpack, or gym bag",
  "Unbox, break down, and recycle old delivery boxes",
  "Scrub your kitchen sink with baking soda or cleaner",
  "Refold all towels or linens in one cabinet",
  "Clean the inside of your microwave and wipe the outside",
  "Wipe all doorknobs and handles in the house",
  "Sweep and mop under the kitchen table",
  "Pick 10 pieces of clothing to donate or store away",
  "Deep clean one bathroom sink and counter area",
  "Polish wood surfaces or wipe all counters with vinegar",
  "Put away all laundry sitting in a basket or on a chair",
  "Clean and organize under one bathroom sink",
  "Disinfect your work-from-home desk and sweep under it",
  "Do 5 slow get-up/stand-down cycles from the floor",
  "Practice balance by standing on one foot during chores",
  "Put on music and tidy one entire bedroom",
  "Wipe windowsills and clean the inside of 3 windows",
  "Wipe down cabinets and kitchen drawers fronts",
  "Refill pet food, tidy the area, sweep the floor",
  "Clean the outside of kitchen appliances (fridge, oven)",
  "Do a full clean of one toilet and bathroom floor",
  "Sort, recycle, or shred all unopened mail and flyers",
  "Rearrange a small space (e.g. entry table, bookshelf)",
  "Dust every light fixture in one room",
  "Run a vacuum on rugs and carpet edges",
  "Walk around the house for 5 minutes while air drying laundry",
  "Organize and disinfect one drawer in every room",
  "Clean out your nightstand drawer and dust the top",
  "Dry sweep entire hallway or high-traffic area",
  "Refill and organize spice rack or cabinet",
  "Unplug and clean around power strips and cords",
  "Sort shoes by type and clean the floor underneath",
  "Reorganize your cleaning supplies cabinet or shelf",
  "Wipe off all screens and remotes in the living room",
  "Do a focused 10-minute “no sitting” tidy sprint"
];

const outdoorIdeas = [
  "Pull weeds from garden beds or gravel areas for 15 minutes",
  "Sweep an entire driveway or patio",
  "Rake or bag leaves in one full section of your yard",
  "Clean and shake out outdoor mats",
  "Water all outdoor plants by hand",
  "Wash your car exterior with a bucket and rag",
  "Walk to a local store instead of driving (under 1 mile)",
  "Pick up litter on your street or block for 10 minutes",
  "Hose down patio furniture and rearrange it",
  "Sweep the sidewalk and curb in front of your home",
  "Scrub outdoor trash bins with soap and water",
  "Wipe down your front door and outdoor light fixtures",
  "Sweep stairs or outdoor steps with extra care",
  "Carry heavy groceries inside one bag at a time",
  "Move your car to the far end of the lot and walk back",
  "Walk laps around your building while waiting on a call",
  "Trim hedges or bushes for 10–15 minutes",
  "Carry laundry to a laundromat instead of driving",
  "Reorganize and sweep out the garage",
  "Clean car interior—vacuum, wipe surfaces, throw out trash",
  "Carry and repot one plant or container garden item",
  "Do a standing breathwork session outside for 10 minutes",
  "Walk and drop off your mail at a mailbox or post office",
  "Sweep or hose off the back patio or deck",
  "Clean the outside of your windows (at least 3)",
  "Walk your recycling to the bin or recycling center",
  "Do laps around a parking lot or block for 10 minutes",
  "Trim dead leaves and sweep debris from porch plants",
  "Put out or take in the garbage cans mindfully",
  "Shake out blankets or pillows outdoors and sun them",
  "Clean out the trunk of your car",
  "Do a short litter sweep in your apartment complex",
  "Scrub and rinse your front step or porch area",
  "Stack firewood or tidy yard tools for 10 minutes",
  "Organize a shed or tool area (15-minute sprint)",
  "Water plants with a watering can instead of a hose",
  "Pick up sticks or rocks in walking paths and tidy edges",
  "Use a push broom to sweep the entire carport or garage floor",
  "Take a 10-minute “no phone” awareness walk",
  "Walk to check your mail and take a longer way back",
  "Reorganize your car’s glove box and storage spaces",
  "Clear cobwebs from outside corners and windows",
  "Wash outdoor toys or sports equipment by hand",
  "Roll up and store hoses neatly",
  "Spot clean outdoor furniture or BBQ grill",
  "Clean and organize your front entry space",
  "Rinse and air out garbage bins",
  "Rinse your bike and check tire pressure manually",
  "Water a public patch or tree near your home",
  "Carry one object (plant, tool, bin) up/down stairs carefully",
  "Walk briskly for 5–10 minutes while voice note journaling",
  "Stand outside and stretch your whole body slowly",
  "Shake and clean your doormat or porch rug",
  "Rinse and organize outdoor containers or buckets",
  "Clean windows or window screens from the outside",
  "Hang wet laundry to dry outdoors manually",
  "Wipe down the mailbox and sweep around it",
  "Re-stack rocks or bricks used as outdoor décor"
];

let xp = 0;
let trophies = [];

function generateIdea() {
  const category = document.getElementById('categorySelect').value;
  let options = [];

  if (category === 'Indoor') {
    options = indoorIdeas;
  } else if (category === 'Outdoor') {
    options = outdoorIdeas;
  } else {
    options = indoorIdeas.concat(outdoorIdeas);
  }

  const idea = options[Math.floor(Math.random() * options.length)];
  document.getElementById('ideaBox').innerText = idea;

  // XP logic
  xp += 10;
  document.getElementById('xpBar').innerText = "XP: " + xp;

  // Trophy milestones
  const trophyBox = document.getElementById('trophyBox');
  const milestones = {
    50: '🥉 Momentum Mover',
    100: '🥈 Rhythm Riser',
    200: '🥇 Daily Dominator',
    350: '🏅 Power From the Ground Up',
    500: '🎖️ NEAT Elite',
    750: '👑 Endgame Energizer'
  };

  if (milestones[xp] && !trophies.includes(xp)) {
    trophies.push(xp);
    trophyBox.innerText = "🏆 You earned: " + milestones[xp] + "!";
    setTimeout(() => {
      trophyBox.innerText = '';
    }, 4000);
  }

  if (xp >= 750) {
    trophyBox.innerText = "👑 You've reached NEAT mastery—but every action still builds power. Keep going!";
  }
}
