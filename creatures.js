const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

// Find and log details of the first dragon found
mythicalCreatures.find((firsEl) => {
  console.log(
    `${firsEl.name} is a ${firsEl.type} and last seen at ${firsEl.lastSeen}`
  );
  return firsEl.name === "Dragon"; // return true to stop searching after finding the first match
});

//Use the findIndex method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.

console.log(mythicalCreatures.findIndex((el) => el.name === "Griffin"));

//Use the find method to locate the first creature last seen in "Enchanted Forest".

console.log(mythicalCreatures.find((el) => el.lastSeen === "Enchanted Forest"));
