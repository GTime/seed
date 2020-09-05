const fetch = require("isomorphic-unfetch");

async function seed() {
  // Fetch CSV Data
  const csvResponse = await fetch(csvDataPath);
  const csvData = await csvResponse.text();
  console.log(csvData);
}

// Running Seed
seed();
