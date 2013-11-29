var assert = require('assert');
var Circle = require('../circle.js');

var circle = new Circle(1);

describe('Circle test', function() {
    it('area calculation test', function(){
        assert.equal(circle.area(), 3.141592653589793);
    });

    it('circumference calculation test', function(){
        assert.equal(circle.circumference(), 6.283185307179586);
    });
});