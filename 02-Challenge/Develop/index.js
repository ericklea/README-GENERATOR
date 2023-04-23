// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const fs = require('fs');

function writeReadme(Title, Description, TableOfContents, Installation, Usage, License){

}
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    //run inquirer prompt
    const inquirer = require('inquirer');
//inquirer prompt
inquirer.prompt([
  {
    type: 'input',
    name: 'Description',
    message: "Describe what your application does, the technologies you used, and the challanges you faced?"
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Red', 'Blue', 'Green', 'Yellow']
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure?'
  }
])
.then(answers => {
  console.log('Answers:', answers);
})
.catch(error => {
  console.log('Error:', error);
});
}
//write then response and console.log it

// Function call to initialize app
init();
