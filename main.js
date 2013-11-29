var Circle = require('./circle.js');
var Square = require('./square.js');
var RightTriangle = require('./righttriangle.js');

var c = new Circle(1);
console.log("Area : "+c.area());
console.log("Circ : "+c.circumference());

var s = new Square(10);
console.log("Area : "+s.area());
console.log("Peri : "+s.perimeter());
console.log("Diag : "+s.diagonal());

var t = new RightTriangle(3,4);
console.log("Hypotenuse : "+t.hypotenuse());
console.log("Angle 0 : "+t.angle(0));
console.log("Angle 1 : "+t.angle(1));