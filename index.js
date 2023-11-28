const inquirer = require('inquirer')
const getLogo = require('./lib/questions')
const generateSvg = require('./lib/generateSvg')
const fs = require('fs')


function init(){
    inquirer.prompt(getLogo)
    .then(answers => {
        const content = generateSvg(answers);
        fs.writeFile(`./examples/${answers.logoText}.svg`, content, err => {
            err ? console.error('Error', err) : console.log('Success: SVG file has been created.')
        })
    })
}

init()