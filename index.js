const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src-template-helper-code');//add page-template.js

//lib modules
const Engineer = require('./lib-classes/Engineer');
const Intern = require('./lib-classes/Intern');
const Manager = require('./lib-classes/Manager');

// array for answers to questions
const newStaffMemberData = [];

// array onject questions asked in CLI to user
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: "input",
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: "input",
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: "list",
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
    ])


    //console.log(answers);
    //if manager is selected answer these questions
    if (answers.role === 'Manager') {
        const managerAns = await inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is your Office Number?',
            name: 'officeNumber',
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
        );
        newStaffMemberData.push(newManager);

        //if engineer selected answer these set of questions
    } else if (answers.role === 'Engineer') {
        const gitHubAnswer = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your Github user name?',
                name: 'github',
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            gitHubAnswer.github
        );
        newStaffMemberData.push(newEngineer);

        //if intern selected answered these questions
    } else if (answers.role === 'Intern'){
        const internAnswer = await inquirer
        .prompt([
            {
            type: 'input',
            nessage: 'What University did you attend?',
            name: 'school',
            },
        ])

        const newIntern = new Intern(
            answers.name, 
            answers.id,
            answers.email,
            internAnswer.school
        );
        newStaffMemberData.push(newIntern);
    }
}; //end of questions function

async function promptQuestions() {
    await questions()

    const addTeamMemberAnswers = await inquirer
    .prompt([
        {
         name: 'addMember',
         type: 'list',
         choices: ['Add a new member', 'Create Team'],
         message: 'What would you like to do next?'   
        }
    ])

    if (addTeamMemberAnswers.addMember === 'Add a new member') {
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam() {
    console.log('New Member', newStaffMemberData)
    fs.writeFileSync(
        "./dist-output/index.html",
        generateTeam(newStaffMemberData),
        'utf-8'
    );
}