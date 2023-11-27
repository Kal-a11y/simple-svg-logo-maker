const getLogo = [
    {
        type: 'input',
        message: 'What will be your logo text? (Enter up to 3 characters)',
        name: 'logoText',
        default: 'SVG'
        
    },
    {
        type: 'input',
        message: 'What will be the color of your logo text? (Enter color keyword or hexcode)',
        name: 'logoTextColor',
        default: '#FFFFFF'
    },
    {
        type: 'list',
        message: 'What will be the shape of your logo?',
        name: 'logoShape',
        choices: [
            'square',
            'circle',
            'triangle',
        ],
        default: 'square'
    },
    {
        type: 'input',
        message: 'What will be the color of your shape? (Enter color keyword or hexcode)',
        name: 'logoShapeColor',
        default: '#00FF00'
    },
    
]

module.exports = getLogo