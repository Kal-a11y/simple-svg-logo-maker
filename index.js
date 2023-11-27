const inquirer = require('inquirer')
const getLogo = require('./lib/questions')


function init(){
    inquirer.prompt(getLogo)
    .then(answers => {
        const content = generateSvg.generateSvg(answers)
        writeToFile(`./examples/${answers.logoText}.svg`, content)
    })
}

init()