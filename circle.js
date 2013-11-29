var Circle = function(radius) {
    this.radius = radius;
};

Circle.prototype = {
    area: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    circumference: function() {
        return Math.PI * this.radius * 2;
    }
};

module.exports = Circle;