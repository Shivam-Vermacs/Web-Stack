const fs = require("fs");

function cleanFile(filepath) {
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error Reading File:", err);
      return;
    }
    const Cleaneddata = data.replace(/\s+/g, " ").trim();
    fs.writeFile(filepath, Cleaneddata, "utf-8", (err) => {
      if (err) {
        console.log("Error Writing file:", err);
        return;
      }
      console.log("File cleaned successfully");
    });
  });
}

const filepath = "cleanme.txt";
cleanFile(filepath);
