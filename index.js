const inquirer = require('inquirer')
const getLogo = require('./lib/questions')
const generateSvg = require('./lib/generateSvg')
const fs = require('fs')


function init(){
    inquirer.prompt(getLogo)
    .then(answers => {
        const content = generateSvg.generateSvg(answers)
        writeToFile(`./examples/${answers.logoText}.svg`, content)
    })
}

init()