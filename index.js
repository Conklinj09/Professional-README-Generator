// TODO: Include packages needed for this application
const generateMarkDown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")

// inquirer.prompt (questions)

// // inquirer.prompt(questions).

// .then(function(answer) {
//     console.log(answer);
// })


// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'input',
        name: 'TableofContents',
        message: 'Includes a short summary of all contents',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Programs installed to run application',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Command to use application.',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please write who contributed to your project',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please write a short description of the testing methods you used.',
    },
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
        name: 'license',
        message: 'What kind of license are you using?',
    },
    


]

// .catch((error) => {
//     if (error.isTtyError) {
//         //Propmt couldn't be rendered in the current environment
//     } else {
//         //something else went wrong
//     }
// });
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
