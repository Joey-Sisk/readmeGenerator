const inquirer = require("inquirer"); // connect the neccesary packages
const util = require("util");
const fs = require("fs");
const readmeTemplate = require("./mdTemplate.js");

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
    choices: ["MIT", "GNU", "Apache"],
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

let licenses = {
  // information about the licenses
  MIT: {
    name: "MIT",
    link: "https://opensource.org/licenses/MIT",
    icon:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  GNU: {
    name: "GNU",
    link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
    icon:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  Apache: {
    name: "Apache",
    link: "https://www.apache.org/licenses/LICENSE-2.0",
    icon:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  unlicensed: {
    name: "Unlicensed",
    link: "This repo is still pending a license.",
    icon:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
};

inquirer
  .prompt(questions)
  .then((answers) => {
    const template = readmeTemplate(answers);

    writeAsync("testingREADME.md", template);
  })
  .catch((error) => {
    console.log(error);
  });
