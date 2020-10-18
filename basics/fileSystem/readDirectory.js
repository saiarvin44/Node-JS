// READ FROM DIRECTORY
const fs = require("fs");
files = fs.readdirSync("../customModulesDemo"); //blocking call
fs.readdir("../customModulesDemo", (err, files) => { //asynchronous call
    console.log(files)
});
console.log(files);

// READ FILE
fs.readFile("../customModulesDemo/collectAnswers.js", "UTF-8", (err, file) => {
    console.log(file);
});

// WRITE TO FILE
const md = `
# this is a new file
We can write text to a file
`;
fs.writeFile("./notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("files saved");
});

// CREATE DIRECTORY
if (fs.existsSync("storage-files")) {
    console.log("already there");
}
else {
    fs.mkdir("storage-files", err => {
        if (err) {
            throw err;
        }
        console.log("Directory created")
    })
}