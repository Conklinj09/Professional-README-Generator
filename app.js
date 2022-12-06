const fs = require("fs");
const inquirer = require("inquirer");
const genHTML = require("./generate");

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "location",
        message: "Where are you from?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github  username?",
    },
    {
        type: "input",
        name: "linkedIn",
        message: "What is your LinkedIn?",
    },
]

inquirer
     .createPromptModule(questions)
     .then(function (answers) {
        console.log(answers);


        const now = Date.now();
        console.log(now);


        fs.writeFile(`${answers.name}--${now}.html`, genHTML(answers), function (error) {
            if (error) return error;
            console.log("done");
        });

     })

