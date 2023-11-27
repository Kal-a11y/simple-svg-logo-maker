const Shape = require("./Shape.js")

class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
       return `<circle cx="65" cy="65" r="50" stroke-width="4" fill="${this.color}" />`
    }
}
// const t = new Circle('blue');
// t.setColor('red')
// console.log(t.render())
// console.table(t);
module.exports = Circle;