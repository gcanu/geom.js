var assert = require('assert');
var RightTriangle = require('../app/righttriangle.js');

var rtriangle = new RightTriangle(3,4);

describe('Right triangle tests', function() {
    it('hypotenuse calculation test', function(){
        assert.equal(rtriangle.hypotenuse(), 5);
    });

    describe('Angles calculation', function() {
        it('angle A calculation test', function(){
            assert.equal(rtriangle.angle(0), 0.9272952180016122);
        });

        it('angle B calculation test', function(){
            assert.equal(rtriangle.angle(1), 0.6435011087932844);
        });
    });
});