//load JSON file

const fs = require("fs");

fs.readFile("./test-8.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    console.log("Adjacency matrix is: \n", customer.input.connections); // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

// console.log(json)
