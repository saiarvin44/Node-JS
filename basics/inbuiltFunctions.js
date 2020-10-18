console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv) //list of commands we ran to run this file

const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; //get the index of flag and get the next arguement
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);

process.stdout.write("Hello ") //same like console log but doesnt add a new line
process.stdin.on("data", data => { //asynchronous function, which waits for input forever
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    process.exit();
})