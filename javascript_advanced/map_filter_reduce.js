// Higher order functions: map, filter, reduce
// map: it is used to iterate over an array and apply a function to each element of the array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const outputArr = arr.map(double);

function double(num) {
    return num * 2;
};

console.log(outputArr);

// OR this way:
const outputArr2 = arr.map(function(num) {
    return num * 2;
});

console.log(outputArr2);

// OR this way:
const outputArr3 = arr.map((num) => num * 2);

console.log(outputArr3);

//tricky example of map
const users = [
    {firstname: 'John', lastname: 'Doe', age: 30},
    {firstname: 'Jane', lastname: 'Super', age: 25},
    {firstname: 'James', lastname: 'Musk', age: 20},
    {firstname: 'Jill', lastname: 'Dokumee', age: 35},
    {firstname: 'Humna', lastname: 'Manki', age: 20}
];

const outputArr9 = users.map((user) => user.firstname + ' ' + user.lastname);

console.log(outputArr9);

// filter: it is used to iterate over an array and apply a function to each element of the array and return a new array with the elements that return true
const outputArr4 = arr.filter(isEven);

function isEven(num) {
    return num % 2 === 0;
};

console.log(outputArr4);

// OR this way: to return odd numbers
const outputArr5 = arr.filter(function(num) {
    return num % 2;
});

console.log(outputArr5);

// OR this way: to return numbers > 5
const outputArr6 = arr.filter((num) => num > 5);

console.log(outputArr6);

//tricky example of filter
const outputArr11 = users.filter((user) => user.age > 20).map((user) => user.firstname);

console.log(outputArr11);


// reduce: it is used to iterate over an array and apply a function to each element of the array and return a single value

const outputArr7 = arr.reduce(sum,0);

function sum(sum, current) {
    sum += current;
    return sum;
}

console.log(outputArr7);

// OR this way: to return the maximum number

const outputArr8 = arr.reduce(function(max, current) {
    if(current > max) {
        max = current;
    }
    return max;
});

console.log(outputArr8);

//tricky example of reduce

const outputArr10 = users.reduce((acc, user) => {
    if(acc[user.age]) {
        acc[user.age] = ++acc[user.age];
    }else{
        acc[user.age] = 1;
    }
    return acc;
},{}); // {} is the initial value of the accumulator

console.log(outputArr10);