//packages needed for this application
    //run inquirer prompt
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe what your application does, the technologies you used, and the challanges you faced?',
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
        message: 'Provide a list of collaborators, third-party assets, or tutorials you used as reference:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Indicate the licenses you used:',
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense1.0', 'TheUnlicense'],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who contributed to this project?',        
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide examples on how to run tests for your application:',           
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },
];
  
//function to write README file
function writeReadMeFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeReadMeFile('README.md', generateMarkdown({...answers}));
    });
}

// Function call to initialize app
init()


