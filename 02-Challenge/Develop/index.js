
// Array of questions for user input
const questions = [
//inquirer prompt
inquirer
.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe what your application does, the technologies you used, and the challanges you faced?',
    },
    {
        type: 'checkbox',
        name: 'Table of Contents',
        message: 'Select the sections you would like to include in your README:',
        choices: ['Installation', 'Usage', 'Credits', 'Liscense'],
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
        type: 'list',
        name: 'License',
        message: 'Indicate the licenses you used:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
        name: 'Questions',
        message: 'What is your GitHub username and email address?',      
    },
])
];

//function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeReadme(answers.Title, answers.Description, answers.TableOfContents, answers.Installation, answers.Usage, answers.License);
    });
}

// Function call to initialize app
init()

//packages needed for this application
    //run inquirer prompt
    const inquirer = require('inquirer');
    const fs = require('fs');
    const {default: choices} = require('inquirer/lib/objects/choices');


 //write then response and console.log it
 //.then((response) => {
    //console.log('Your README file will now be generated');
    //const filename = `${response.Title.toLowerCase().split(' ').join('')}.json`;
    //fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
   // err ? console.log(err) : console.log('Success!')
   // );
 //});


    console.log('Answers:', answers);
    writeReadme(answers.Title, answers.Description, answers.TableOfContents, answers.Installation, answers.Usage, answers.License);


//function to write README file
function writeReadme(Title, Description, TableOfContents, Installation, Usage, Credits, License) {
    let readme = `# ${Title}
    ## Description
    ${Description}
    ## Table of Contents
    ${TableOfContents}
    ## Installation
    ${Installation}
    ## Usage
    ${Usage}
    ## Credits
    ${Credits}
    ## License
    ${License}
`;
    writeToFile('README.md', readme);

}

}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeReadme(answers.Title, answers.Description, answers.TableOfContents, answers.Installation, answers.Usage, answers.License);
    });
}
// Function call to initialize app
init()
