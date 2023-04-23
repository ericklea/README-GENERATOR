// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file


function writeReadme(Title, Description, TableOfContents, Installation, Usage, License) {
    const readme = `# ${Title}
    ## Description
    ${Description}
    ## Table of Contents
    ${TableOfContents}
    ## Installation
    ${Installation}
    ## Usage
    ${Usage}
    ## License
    ${License}
    `;
    writeToFile('README.md', readme);

}
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeReadme(answers.Title, answers.Description, answers.TableOfContents, answers.Installation, answers.Usage, answers.License);
    });
}


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
            console.log('Title, ${answers.name}');
            const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

            fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });


            //console.log('Answers:', answers);



// Function call to initialize app
init();
