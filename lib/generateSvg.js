const Triangle = require("./Triangle.js")
const Circle = require("./Circle.js")
const Square = require("./Square.js")

function renderShape(shape,color){
    switch (shape){
        case 'triangle':
            return new Triangle(color).render();
        case 'circle':
            return new Circle(color).render();
        case 'square':
            return new Square(color).render();
            
    }
}
function renderText(text,color){
    return `<text x="35" y="80" fill="${color}" font-size="30">${text}</text>
    `
}

function generateSvg(data){
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${renderShape(data['logoShape'],data['logoShapeColor'])}
        ${renderText(data['logoText'],data['logoTextColor'])}
    </svg>
    `
}

module.exports = generateSvg;