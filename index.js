const inquirer = require('inquirer')
const getLogo = require('./lib/questions')


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
            const content = generateSvg.generateSvg(answers)
            writeToFile(`./examples/${answers.logoText}.svg`, content)
        }
    })
}

init()