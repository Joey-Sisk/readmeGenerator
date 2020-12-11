const licensed = {
  licenseIconCurrent(license) {
    return `licenses.${license}.icon`;
  },
  licenseLinkCurrent(license) {
    return `licenses.${license}.link`;
  },
  licenseNameCurrent(license) {
    return `licenses.${license}.link`;
  },
};

let generateReadme = ({
  // template for document content
  projectName,
  license,
  description,
  usage,
  contributers,
  email,
  usersName,
  github,
}) => {
  return `# ${projectName}
${licensed.licenseIconCurrent(license)}

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

###${licensed.licenseNameCurrent(license)}

${licensed.licenseLinkCurrent(license)}
  
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

module.exports = generateReadme;
