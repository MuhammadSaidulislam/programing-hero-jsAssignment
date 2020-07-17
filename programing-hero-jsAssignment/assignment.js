// Feet to Mile Converter

function feetToMile(feet) {
    if (feet < 0) {
        return "Invalid number";
    } else {
        var mile = feet * 0.000189394;
    }
    return mile;
}
var mileResult = feetToMile(10);
console.log("The mile result is: " + mileResult);

// Wood calculator

function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalResult = woodCalculator(100, 20, 3);
console.log("Total number of Wood is: " + totalResult);

// Brick Calculator

function brickCalculator(floor) {
    if (floor <= 10) {
        var brickCount = floor * 15 * 1000;
    } else if (floor <= 20) {
        var brickCount = (10 * 15 * 1000) + (floor - 10) * 12 * 1000;
    } else {
        var brickCount = (10 * 15 * 1000) + (10 * 12 * 1000) + (floor - 20) * 10 * 1000;
    }
    return brickCount;
}
var totalBrick = brickCalculator(11);
console.log("Total number of Brick is: " + totalBrick);

// tiny Friend
function tinyFriends(friends) {
    var position = 0;
    var smallest = friends[0].length;
    for (var i = 0; i < friends.length; i++) {
        var current = friends[i].length;
        if (current < smallest) {
            smallest = current;
            position = i;
        }
    }
    return position;
}
var position = tinyFriends(["Sabit", "Nokibul", "ivan", "shirsho", "rakibul"]);
console.log("The array index number is: " + position);