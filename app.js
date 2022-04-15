const { readFile, writeFile } = require("fs");
const { result } = require("lodash");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//promise - Only runing when all sync tasks are done

//await - waiting for promise to resolve then start runinig

const start = async () => {
  try {
    const first = await readFile(
      "./content/first.txt",
      "utf-8",
      (err, result) => {
        console.log(result);
      }
    );
    const second = await readFile(
      "./content/second.txt",
      "utf-8",
      (err, result) => {
        console.log(result);
      }
    );
    await writeFile(
      `./content/result-mind-grenade.txt`,
      `THIS IS AWESOME:${first} ${second}`,
      (err, result) => {
        console.log(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
