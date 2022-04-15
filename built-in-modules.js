// We have
// 1 OS
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

//metod returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds `);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
// 2 Path
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "sub-content", "text.txt");
console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absoulute = path.resolve(__dirname, "content", "sub-content", "text.txt");
console.log(absoulute);
// 3 Fs
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

// console.log(first,second)

writeFileSync(
  "./content/result-sync.txt",
  `Here is our resault: ${first},${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");

// asychronos read
const { writeFile, readFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  const second = result;
  writeFile(
    "./content/result-async.txt",
    `Here is our resault: ${first},${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("done with this task");
    }
  );
});
console.log("starting next one");

// 4 Http

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(
    `<h1>Oops</h1>
     <p> We cant seem to find page you are looking for</p>
     <a href="/"> Go home </a>
     `
  );
  // res.write()

  // res.end()
});

server.listen(5000);
