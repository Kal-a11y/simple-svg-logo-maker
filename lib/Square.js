const Shape = require("./Shape.js")

class Square extends Shape{
    constructor(color){
        super(color);
    }
    render(){
       return `<rect width="100" height="100" x="15" fill="${this.color}"/>`
    }
}
module.exports = Square;