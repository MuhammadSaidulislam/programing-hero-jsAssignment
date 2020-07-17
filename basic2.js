// Array practice
var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayValue);

// index position
var position = arrayValue.indexOf(4);
console.log("index number: " + position);

console.log("index value is: " + arrayValue[2]);
arrayValue[2] = 11;
console.log(arrayValue);

// push 
arrayValue.push(12);
console.log(arrayValue);

// push first
arrayValue.unshift(0);
console.log(arrayValue);

// array length
console.log(arrayValue.length);

// pop
arrayValue.pop();
console.log(arrayValue);
// pop first
arrayValue.shift();
console.log(arrayValue);

//  Array slice

var part = arrayValue.slice(6);
console.log(part);

// while loop

var whileValue = 10;
while (whileValue < 15) {
    console.log(whileValue);
    whileValue++;
}

// for loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < arrayValue.length; i++) {
    var element = arrayValue[i];
    console.log("array index value: " + element);
}

// switch case
var switchValue = 500;
switch (switchValue) {
    case 100:
        console.log("100");
        break;
    case 500:
        console.log("500");
        break
    default:
        console.log("none");
}

// Simple Function Call

function call() {
    console.log("call");
}
call();

// Function parameter call

function para(num) {
    var paraValue = num * 2;
    console.log(paraValue);
}
para(20);

// Function call by return

function paraReturn(numPass) {
    var returnValue = numPass * 2;
    return returnValue;
}
var returnValue = paraReturn(5);
console.log(returnValue);

// multiple value pass in function

function add(add1, add2) {
    var addResult = add1 + add2;
    return addResult;
}
var resultAdd = add(20, 30);
console.log("Add result: " + resultAdd);

// Object property

var student = { id: 1, phone: 0, name: "saidul" };
var phoneNumber = student.phone;
console.log(phoneNumber);