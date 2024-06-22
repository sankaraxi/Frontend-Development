var place = 'third';

switch (place){
    case 'first':
        console.log("gold");
        break;
    case 'second':
        console.log("silver");
        break;
    case 'third':
        console.log("bronze");
        break;
    default:
        console.log("No medal")
}


//tarffic light example
var light = 'red';
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }

 //cousera task
 //if else statement
 var age = 10;
 if(age>=65){
    console.log("You get your income from your pension");
 }else if (age < 65 && age >= 18){
    console.log("Each month you get a salary");
 }else if (age < 18){
    console.log("You get an allowance");
 }else{
    console.log("The value of the age variable is not numerical");
 }

 // switch statement
 var day = "Sunday";

 switch(day) {
    case 'Monday':
        console.log('Read a book');
        break;
    case 'Tuesday':
        console.log('Watch a movie');
        break;
    case 'Wednesday':
        console.log('Read a book');
        break;
    case 'Thursday':
        console.log('Play basketball');
        break;
    case 'Friday':
        console.log('Socialize');
        break;
    case 'Saturday':
        console.log('Chill');
        break;
    case 'Sunday':
        console.log('Have barbecue');
        break;
    default:
        console.log('There is no such day');
 }

 