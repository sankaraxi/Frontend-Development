//coursera task
function letterFinder(word,match){
    for(var i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        }else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test","t")

//first class functions or first class citizens
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

// var useRandom = true;
var useRandom = false;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

//Higher order functions

function addTwoNums2(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNums2(specificNum, specificNum); // returned number is 84
addTwoNums2(specificNum, randomNum); // returned number is 42 + some random number

//pure functions
function addTwoNums3(a, b) {
    console.log(a + b)
}

addTwoNums3(3,4);
