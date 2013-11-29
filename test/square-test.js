var assert = require('assert');
var Square = require('../square.js');

var square = new Square(10);

describe('Square tests', function() {
    it('area calculation test', function(){
        assert.equal(square.area(), 100);
    });

    it('perimeter calculation test', function(){
        assert.equal(square.perimeter(), 40);
    });

    it('diagonal calculation test', function(){
        assert.equal(square.diagonal(), 14.142135623730951);
    });
});