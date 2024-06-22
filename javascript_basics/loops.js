//for loop
var i;
for(i=1;i<6;i++){
    console.log(i)
}
console.log('Counting completed!')

console.log();

var i;
for(i=5;i>0;i--){
    console.log(i)
}
console.log('Countdown finished!')

console.log();
//while loop

var i = 1;
while (i<6){
     console.log(i)
     i++;
}
console.log('Counting completed!')

console.log();

var i = 5;
while (i>0){
     console.log(i)
     i--;
}
console.log('Countdown finished!')

console.log()

var year = 2018;

while (year<2023){
    console.log(year);
    year++;
}
console.log();

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
console.log();
//cousera tasks
for (var i = 1;i<11;i++){
    if(i==1){
        console.log("Gold Medal")
    }else if(i==2){
        console.log("Silver Medal")
    }else if(i==3){
        console.log("Bronze Medal")
    }else{
        console.log(i)
    }
}

console.log();

for (var i = 1;i<11;i++){
    switch(i) {
    case 1:
        console.log('Gold Medal');
        break;
    case 2:
        console.log('Silver Medal');
        break;
    case 3:
        console.log('Broze Medal');
        break;
    default:
        console.log(i);
    }
}




