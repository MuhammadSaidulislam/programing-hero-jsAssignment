// Inch to feet
function inchToFeet(inchValue) {
    var feet = inchValue / 12;
    return feet;
}
var feetResult = inchToFeet(144);
console.log(feetResult);

// let ans const

// const for fixed
// let can be change

var name = "saidul islam"
if (name.length > 5) {
    name = "said"
}
console.log(name);