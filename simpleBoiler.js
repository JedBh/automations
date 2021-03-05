const fs = require("fs");

const folderName = process.argv[2] || "Project";
const path = "";

const Data = {
  html: "",
  css: "",
  js: "",
};

// reading the files boilerplates
try {
  Data.html = fs.readFileSync(path + "lib/boiler.html", "utf8");
} catch (err) {
  throw err;
}

try {
  Data.css = fs.readFileSync(path + "lib/boiler.css", "utf8");
} catch (err) {
  throw err;
}

try {
  Data.js = fs.readFileSync(path + "lib/boiler.js", "utf8");
} catch (err) {
  throw err;
}

// creating directory and files
try {
  fs.mkdirSync(folderName);
  console.log(`Directory created with the name: ${folderName}`);
} catch (err) {
  throw err;
}

try {
  fs.writeFileSync(`${folderName}/index.html`, Data.html);
  console.log("Html file created...");
} catch (err) {
  throw err;
}

try {
  fs.writeFileSync(`${folderName}/style.css`, Data.css);
  console.log("Css file created...");
} catch (err) {
  throw err;
}

try {
  fs.writeFileSync(`${folderName}/script.js`, Data.js);
  console.log("Javascript file created...");
} catch (err) {
  throw err;
}
