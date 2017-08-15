//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var fiveLess = num - 5;
  return fiveLess;
}

function areSameLength(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  return (len1==len2);
}

function areEqual(x, y) {
  return (x==y);
}

function lessThanNinety(num) {
  return (num < 90);
}

function greaterThanFifty(num) {
  return (num > 50);
}

function add(x, y) {
  return x+y;
}

function subtract(x, y) {
  return x-y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x*y;
}

function getRemainder(x, y) {
  return x%y;
}

function isEven(num) {
  return (num%2==0);
}

function isOdd(num) {
  return (num%2==1);
}

function square(num) {
  return num*num;
}

function cube(num) {
  return Math.pow(num,3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num,exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  return length*width;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  return base*height/2;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  return Math.round(Math.PI*radius*radius);
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
  return length*width*height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
