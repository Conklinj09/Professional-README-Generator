// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkDown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    }

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            fs.writeFileSync("ReadMe.md", generateMarkDown(answers))
        })
}

// Function call to initialize app
init();
