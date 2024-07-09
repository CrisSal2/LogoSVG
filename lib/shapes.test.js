/****************************************************** Imports ****************************************************/


const { Triangle, Square, Circle } = require('./shapes.js');


/****************************************************** Test for Shapes ****************************************************/


describe('Triangle', () => {

    test('Should render a gray Triangle', () => {

        const shape = new Triangle();
        shape.setColor('gray');

        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="gray" />');

    });

});


describe('Square', () => {

    test('Should render a red Square', () => {

        const shape = new Square();
        shape.setColor('red');

        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
        
    });

});


describe('Circle', () => {

    test('Should render a green Circle', () => {

        const shape = new Circle();
        shape.setColor('green');

        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');

    });

});
