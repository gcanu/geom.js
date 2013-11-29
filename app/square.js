var Square = function(side) {
    this.side = side;
};

Square.prototype = {
    area: function() {
        return Math.pow(this.side, 2);
    },

    perimeter: function() {
        return this.side * 4;
    },

    diagonal: function() {
        return Math.sqrt(this.side * this.side * 2);
    }
};

module.exports = Square;