const fs = require("fs");

setTimeout(() => {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(`Error:${err}`);
    } else {
      console.log("File Read:", data);
    }
  });
}, 1000);

for (let i = 0; i <= 100; i++) {
  console.log("hey bud");
}
