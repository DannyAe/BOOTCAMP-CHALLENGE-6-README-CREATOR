// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please describe the project",
        name: "projectDesc",
    },
    {
        type: "input",
        message: "How to install this app",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this app",
        name: "usageInfo",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contGuidelines",
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "testProject",
    },
    {
        type: "input",
        message: "what is your Github Profile?",
        name: "gitProfile",
    },
    {
        type: "input",
        message: "what is your e-mail?",
        name: "e-mail",
    },
    {
        type: "list",
        message: "what type of lisence does this have?",
        name: "lisence",
        choices: ["MIT", "Apache"]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        // console.log(answers);
        const content = generateMarkdown(answers)
    })
}

// Function call to initialize app
init();
