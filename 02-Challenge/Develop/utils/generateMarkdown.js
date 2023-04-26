// function that returns a license badge based on which license is passed in and if there is no license, return an empty string
function renderLicenseBadge(License) {
  console.log(License)
  if (License !== "None") {
    return (
      `![GitHub license](https://img.shields.io/badge/license-${License}-blue.svg)`
    );
  }
  return "";
}

// function that returns the license link and if there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== "None") {
    return (
      `\n* [License](#license)\n`
    );
  }
  return "";
}

// function that returns the license section of README and if there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== "None") {
    return (
      `

This project is licensed under the ${License} license.`
    );
  }
  return "";
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Credits
  ${data.Credits}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  If you have any questions, please contact me at:
  [${data.GitHub}](https://github.com/${data.GitHub})
  ${data.Email}

  ## License
  ${renderLicenseSection(data.License)}
  ${(data.License)}
  ${renderLicenseLink(data.License)}
`;
}

module.exports = generateMarkdown;
