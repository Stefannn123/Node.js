// asychronos read
const { writeFile, readFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result1) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result1;
    writeFile(
      "./content/result-async.txt",
      `Here is our resault: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
