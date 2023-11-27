const Triangle = require("./Triangle.js")
const Circle = require("./Circle.js")
const Square = require("./Square.js")



describe('Shapes', () => {
    //Testing Shape colors
    describe('Color', () => {
        //triangle
        it('should return true when keyword color matches on triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="65, 0 125, 100 0, 100" fill="blue" />');
        })
        //circle
        it('should return true when keyword color matches on circle', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="65" cy="65" r="50" stroke-width="4" fill="blue"/>');
        })
        //square
        it('should return true when keyword color matches on square', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect width="100" height="100" x="15" fill="blue"/>');
        })
    })
})