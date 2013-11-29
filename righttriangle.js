var RightTriangle = function(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
};

RightTriangle.prototype = {
    hypotenuse: function() {
        return Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2));
    }
};

module.exports = RightTriangle;