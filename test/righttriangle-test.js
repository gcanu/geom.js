var assert = require('assert');
var RightTriangle = require('../righttriangle.js');

var rtriangle = new RightTriangle(3,4);

describe('Right triangle tests', function() {
    it('hypotenuse calculation test', function(){
        assert.equal(rtriangle.hypotenuse(), 5);
    });
});