const express = require("express");
const fetch = require("isomorphic-unfetch");

const port = 4001;

const csvDataPath =
  "https://github.com/dougymenns/covid-data/blob/master/covid%2019%20data.csv";

async function main() {
  const app = express();
  app.get("/load-database", async (req, res) => {
    //
    // Fetch CSV Data
    const csvResponse = await fetch(csvDataPath);
    const csvData = await csvResponse.text();
    console.log(csvData);

    res.send("Hey!");
  });

  //  Listen
  app.listen(port, () =>
    console.log(`Server live at http:://127.0.0.1:${port}`)
  );
}

// Running
main();
