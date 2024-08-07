const radius = [3, 1, 2, 4];

const calculate = function(radius,logic){ // this implementation is called higher order function
   
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

Array.prototype.calculateMap = function(logic){ // this implementation is called higher order function
   // this is a prototype function  which is used to add a new function to the array object
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameters = function(radius){
    return 2 * radius;
}



console.log(calculate(radius,area));
console.log(radius.calculateMap(area));
// console.log(radius.map(area)); // same as above and the calculate functions
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameters));