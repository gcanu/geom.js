var RightTriangle = function(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
};

RightTriangle.prototype = {
    hypotenuse: function() {
        return Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2));
    },

    angle: function(summit) {
        var angle;
        if(summit === 0)
            angle = Math.atan(this.sideB / this.sideA);
        if(summit === 1)
            angle = Math.atan(this.sideA / this.sideB);
        return angle;
    }
};

module.exports = RightTriangle;