// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
(https://img.shields.io/badge/License-%20License-blue)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  value: {
    name: 'Apache 2.0 License',
    link; 'Apache%202.0',
    url; 'https://opensource.org/licenses/Apache-2.0',
    color; 'blue',
  },
  {
    name: 'MIT License',
    link; 'MIT%License',
    url; 'https://opensource.org/licenses/MIT',
    color; 'yellow'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Description
 ${data.description}
`;
}

module.exports = generateMarkdown;
