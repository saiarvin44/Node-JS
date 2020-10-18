const events = require("events"); //similar to pubsub

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => { //first arguement is second arguement of the emit function, and second is the third
    console.log(`${user} : ${message}`)
});

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "Terminal");
});
