// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file


function writeReadme(Title, Description, TableOfContents, Installation, Usage, License) {

}
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    //run inquirer prompt
    const inquirer = require('inquirer');
    const fs = require('fs');
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
            type: 'list',
            name: 'License',
            message: 'Indicate the licenses you used:',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },

    ])
    //write then response and console.log it
            .then(answers => {


            //console.log('Answers:', answers);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}


// Function call to initialize app
init();
