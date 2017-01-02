const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {



    it('should throw error if num is not a number', function() {

        const nonNumberInputs = [
            [a],
            ['2'],
            ['b']
        ];

        nonNumberInputs.forEach(function(input) {
                fizzBuzzer(nonNumberInputs[0], nonNumberInputs[1], nonNumberInputs[2]);
            .should.throw(Error);

        });

    });



    it('should return fizz-buzz if num is divisible by 15', function() {

        const divBy15 = [45, 60, 90];

        divBy15.forEach(function(input) {
            const returnWord = fizzBuzzer(input[0], input[1], input[2]);
            returnWord.should.equal('fizz-buzz');
        });

    });


    it('should return buzz if num is divisible by 5', function() {


    });


    it('should return fizz if num is divisible by 3', function() {


    });


    it('should return num if num is not divisible by 15,5,3', function() {


    });

});
