const licensed = {
  licenseIconCurrent(license) {
    let icon = `licenses.${license}.icon`;
    return icon;
  },
  licenseLinkCurrent(license) {
    let link = `licenses.${license}.link`;
    return link;
  },
  licenseNameCurrent(license) {
    let name = `licenses.${license}.name`;
    return name;
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
