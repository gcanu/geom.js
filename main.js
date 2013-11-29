var Circle = require('./circle.js');
var Square = require('./square.js');

var c = new Circle(1);
console.log("Area : "+c.area());
console.log("Circ : "+c.circumference());

var s = new Square(10);
console.log("Area : "+s.area());
console.log("Peri : "+s.perimeter());
console.log("Diag : "+s.diagonal());