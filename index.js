// TODO: Include packages needed for this application
const inqurer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
    return inqurer.prompt([
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
        type: "selector",
        message:"Pick a License",
        options: ["MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPv3", "Mozilla Public", "Apache", "Boost", "Unlicense"],
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
