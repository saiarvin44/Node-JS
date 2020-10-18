const waitTime = 3000;
const waitinterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitinterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0); //brings back cursor to begining position
    process.stdout.write(`Waiting ... ${p}`);
}

console.log(`Setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    clearInterval(interval);
    console.log("Done");
}

const interval = setInterval(incTime, waitinterval) //returns the interval itself
setTimeout(timerFinished, waitTime); //first arguement is function to execute after timer has executed, second is timer
