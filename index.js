// TODO: Include packages needed for this application
const inqurer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type:"input",
        name: "motivation",
        message: "What motivated you to execute this project?",
    },
    {
        type:"input",
        name:"reason",
        message: "What was the reason for buliding this assignment?",
    },
    {
        type:"input",
        name:"issue",
        message: "What issue will your project fix?",
    },
    {
        type:"input",
        name:"learn",
        message:"What did you did you learn?",
    },
    {
        type:"input",
        name:"installation",
        message:"How can the user install your application?",
    },
    {
        type:"input",
        name:"usage",
        message:"How can the user use your application?",
    },
    {
        type:"input",
        name:"credits",
        message:"List any collaborators, third-party assets and/or tutorials that assisted with the making of your application:",
    },
    {
        type:""
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
