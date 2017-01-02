const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {



    it('should throw error if num is not a number', function() {

        const nonNumberInputs = [a, ' ', ''];

        nonNumberInputs.forEach(function(input) {

            fizzBuzzer(input).should.throw(Error);
        });

    });



    it('should return fizz-buzz if num is divisible by 15', function() {


    });


    it('should return buzz if num is divisible by 5', function() {


    });


    it('should return fizz if num is divisible by 3', function() {


    });


    it('should return num if num is not divisible by 15,5,3', function() {


    });

});
