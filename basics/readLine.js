const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like node? ", answer => {  //first parameter is question, second is a callback to call when question is answered, rl.question is an inbuild function
    console.log(`Your answer : ${answer}`);
})