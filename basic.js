// basic print
console.log(12);
// numeric value print
var price = 10;
console.log(price);
console.log(typeof price);
// string print
var name = "Saidul islam";
console.log(name);
console.log(typeof name);
// boolen print
var isHot = true;
console.log(isHot);
console.log(typeof isHot);
// string upper case
var stringUpper = "My name is Saidul Islam"
console.log(stringUpper.toUpperCase());
// string lower case
var stringUpper = "My name is Saidul Islam"
console.log(stringUpper.toLowerCase());
// string starting position
var stringUpper = "My name is Saidul Islam"
console.log(stringUpper.indexOf('is'));
// string separate
var stringUpper = "My name is Saidul Islam"
console.log(stringUpper.split(' '));
// float
var number1 = 20;
var number2 = 20.5;
console.log(number1 + number2);
// string and number
var num = 30;
var str = '90.8';
str = parseFloat(str);
console.log(num + str);

var number3 = 10;
var number4 = 3;
var divide = number3 / number4;
divide = divide.toFixed(2);
console.log(divide);

//  math solve

var price1 = 35;
var price2 = 4;
var price3 = price1 % price2;
console.log(price3);

// absolute value

var absolute = -5;
absoluteValue = Math.abs(absolute);
console.log(absoluteValue);

// round figure number

var round = 5.6767;
roundValue = Math.round(round);
console.log(roundValue);

// floor value

var floor = 5.9999;
floorValue = Math.floor(floor);
console.log(floorValue);

//  Ceil value

var ceil = 5.000009;
ceilValue = Math.ceil(ceil);
console.log(ceilValue);

// random value
var random = 5;
randomValue = Math.random();
console.log(randomValue);

// Conditional statement
var conditionValue = 10;
if (conditionValue == 10) {
    console.log("Print Yes");
} else {
    console.log("Print No");
}

// multiple condotion

var job = true;
var money = 5000;
if (job == true && money > 200000) {
    console.log("Succcess");
} else {
    console.log("Fail");
}

var jobFound = true;
var moneyAmount = 500000;
if (jobFound == true || moneyAmount > 200000) {
    console.log("Succcess");
} else {
    console.log("Fail");
}

// TimeZone
var date = new Date('1971-12-16');
console.log(date);