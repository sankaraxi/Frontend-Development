//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

//accessing objects

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);
console.log(table.color); // 'brown'

console.log();

//using dot operator
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house2);
house2.windows = 10; // i can add new values
console.log(house2); 
house2.windows = 11; // i can also update the existing values
console.log(house2); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11

console.log();

//using the bracket notation
var house3 = {};
house3["rooms"] = 5;
house3['color']= "yellow";
house3["priceUSD"] = 4553234;
console.log(house3); // {rooms: 4, color: 'pink', priceUSD: 12345}

//I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both.

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}


//bracket notation can evaluvate expressions
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//Arrays are opjects
var fruits = [];
fruits.push("apple");
fruits.push('pear');
console.log(fruits);
fruits.pop();
console.log(fruits);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    // console.log(arr);
    return arr; // also i can return the value for further use
}
console.log();
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);

//coursera task
var clothes = [];
clothes.push("T-shirts");
clothes.push("Joggers");
clothes.push("Track Pants");
clothes.push("Shorts");
clothes.push("Hoodie");
clothes.pop();
console.log(clothes);

var favCar = {};
favCar.color = "Blue";
favCar.convertible = true;
console.log(favCar);

//object methods
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()


