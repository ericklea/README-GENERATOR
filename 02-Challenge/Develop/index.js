// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const fs = require('fs');

function writeReadme(Title, Description, TableOfContents, Installation, Usage, License) {

}
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    //run inquirer prompt
    const inquirer = require('inquirer');
    //inquirer prompt
    inquirer.prompt([
        {
            type: 'input',
            name: 'Description',
            message: 'Describe what your application does, the technologies you used, and the challanges you faced?',
        },
        {
            type: 'checkbox',
            name: 'Table of Contents',
            message: ['Installation', 'Usage', 'Credits', 'Liscense'],
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instruction and examples for use:',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List collaborators, tutorials followed, and materials used:',           
        },
        {
            type:

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
