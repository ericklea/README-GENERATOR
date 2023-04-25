// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    );
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `

This project is licensed under the ${license} license.`
    );
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
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
  [${data.GitHub}](github.com/${data.GitHub})
  ${data.Email}

  ## License
  ${renderLicenseSection(data.License)}
  ${(data.License)}
  ${renderLicenseLink(data.License)}
`;
}

module.exports = generateMarkdown;
