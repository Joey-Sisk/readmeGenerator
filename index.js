const inquirer = require("inquirer"); // connect the neccesary packages
const util = require("util");
const fs = require("fs");
const readmeTemplate = require("./utils/mdTemplate.js");

const writeAsync = util.promisify(fs.writeFile); // promisify keeps writeFile from callback hell

let questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?:",
  },
  {
    type: "input",
    name: "description",
    message: "In a short paragraph please describe your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "In a sentence please explain the usage of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license type are you using?:",
    choices: ["MIT", "GNU", "Apache", "Unlicensed"],
  },
  {
    type: "input",
    name: "contributers",
    message: "Who else contributed to your project?:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?:",
  },
  {
    type: "input",
    name: "usersName",
    message: "What is your name?:",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide a link to your github account:",
    default: "I don't have a github account.",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const template = readmeTemplate(answers);

    writeAsync("sample-README.md", template);
  })
  .catch((error) => {
    console.log(error);
  });
