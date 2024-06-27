const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
}); //[30,40,50]

[0,10,20,30,40,50].map( function(num) {
    return num / 10
}) //[0,1,2,3,4,5]

// maps in JS
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//sets in JS
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);