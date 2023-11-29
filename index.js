const inquirer = require('inquirer')
const getLogo = require('./lib/questions')
const generateSvg = require('./lib/generateSvg')
const fs = require('fs')


function init(){
    inquirer.prompt(getLogo)
    .then(answers => {
        if (answers.logoText.length > 3){
           console.log('Logo text must be less than 3 characters. Try again')
            init()
        } else if (answers.logoText === 0){
            console.log('Logo text must be up to 3 characters. Try again')
            init()
        } else{
            const content = generateSvg(answers);
            fs.writeFile(`./examples/${answers.logoText}.svg`, content, err => {
                err ? console.error('Error', err) : console.log('Success: SVG file has been created.')
            })
        }
    })
}

init()