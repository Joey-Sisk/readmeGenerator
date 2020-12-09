const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");


const writeFileAsync = util.promisify(fs.writeFile);

let generateMarkdown = ({
  description,
  usage,
  license,
  contributers,
  email,
  usersName,
  github,
}) => {
  `# Cool Project
![GitHub license](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)

## Description

${description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
npm i
\`\`\`

## Usage

${usage}

## License

${license}
  
## Contributing

${contributers}

## Tests

To run tests, run the following command:

\`\`\`
npm test
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${usersName}](${github}).
`;
};

const questions = [
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
    type: "input",
    name: "license",
    message: "Which license type are you using?:",
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
  .then(answers => {
    const template = generateMarkdown(answers);
    writeFileAsync("testingREADME.md", template);
  })
  .catch((error) => {
    console.log(error);
  });

// const promptUser = () => {
//   return inquirer.prompt([

//   ]);
// };

// const init = async () => {
//   console.log("Are you ready to write your readme file?");
//   try {
//     const answers = await promptUser();

//     const markdown = generateMarkdown(answers);

//     await writeFileAsync("README.md", markdown);

//     console.log("Congrat's, you've written a readme!");
//   } catch (err) {
//     console.log(err);
//   }
// };

// init();
