const readLine = require("readline");
const { EventEmitter } = require("events");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


module.exports = (questions, done) => {
    const answers = [];
    const [ firstQuestion ] = questions;

    const emitter = new EventEmitter();
    
    const questionsAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionsAnswered);
        }
        else {
            emitter.emit("complete", answers);
            done(answers);
        }
    }

    rl.question(firstQuestion, questionsAnswered);
}
