// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of the project?",
        name: "descript",
      },
      {
        type: "input",
        message: "What are the installation instructions?",
        name: "install",
      },
      {
        type: "input",
        message: "Who contributed to the project?",
        name: "users",
      },
      {
        type: "input",
        message: "Instructions for use:",
        name: "instruct",
      },
      {
        type: "input",
        message: "What is the Github username for the contributor?",
        name: "git",
      },
      {
        type: "list",
        message: "Which License?",
        name: "license",
        choices: ["MIT", "GNU GPL V2", "APACHE 2.0", "None"]
      },
      {
        type: "input",
        message: "How to contribute?",
        name: "giveme$",
      },
      {
        type: "input",
        message: "How to test the app?",
        name: "test",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => writeToFile(data))
}

// Function call to initialize app
init();
