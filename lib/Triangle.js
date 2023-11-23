const Shape = require("./Shape.js")

class Triangle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
       return `<polygon points="65, 0 125, 100 0, 100" fill="${this.color}" />`
    }
}
module.exports = Triangle;