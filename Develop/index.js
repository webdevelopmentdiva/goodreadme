const axios = require('axios');
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [{
        name: 'username',
        type: 'input',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'title',
        type: 'input',
        message: 'What is your project title?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Step-by-Step installation process'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How can we implement this project?'
    },
    {
        name: 'license',
        type: 'input',
        message: "What is your project's license?"
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'Who contributed to your project?'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'How have you tested your project?'
    },
    {
        name: 'url',
        type: 'input',
        message: 'What is your project URL?'
    },

];

function gitHub(username) {
    let profPictUrl;

    return axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
            profPictUrl = res;
            console.log(profPicUrl)
        })
        .catch((err) => {
            console.log(`Error: invalid Github username`);
        })
}

gitHub();


inquirer
    .prompt()
    .then(() {

    })