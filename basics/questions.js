const collectAnswers = require("./customModulesDemo/collectAnswers")

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with nodejs? "
];

collectAnswers(questions, answers => {
    console.log("Thank you for answers. ");
    console.log(answers);
    process.exit();
});