const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {



    it('should throw error if num is not a number', function() {

        const nonNumberInputs = ['a string', false, [a, b, c], function() {}, true];

        nonNumberInputs.forEach(function(input) {
            fizzBuzzer(input).should.throw(Error);
        });
    });



    it('should return "fizz-buzz" if num is divisible by 15', function() {

        const divBy15 = [45, 60, 90];

        divBy15.forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz-buzz');
        });
    });


    it('should return "buzz" if num is divisible by 5', function() {

        const divBy5 = [25, 75, 125];

        divBy5.forEach(function(input) {
            fizzBuzzer(input).should.equal('buzz');
        });
    });

    it('should return fizz if num is divisible by 3', function() {});

    const divBy3 = [3, 9, 81];

    divBy3.forEach(function(input) {
        fizzBuzzer(input).should.equal('fizz');
    });
});

it('should return num if num is not divisible by 15,5,3', function() {
[1, 2, 4, 7].forEach(function(input) {
    fizzBuzzer(input).should.equal(input);
});
});

});
