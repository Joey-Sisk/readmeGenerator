const licensed = { // object that connects license info to page
  licenseIconCurrent(license) {
    let icon = licenses[license].icon;
    return icon;
  },
  licenseLinkCurrent(license) {
    let link = licenses[license].link;
    return link;
  },
  licenseNameCurrent(license) {
    let name = licenses[license].name;
    return name;
  },
};

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
