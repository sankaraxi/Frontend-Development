// var shoes = 100;
// var tax = 1.2;

// function totalPrice(shoes,tax){
//     return shoes * tax;
// }

// console.log(totalPrice(shoes,tax));

//oop 1
var purchase1 = {
    shoes : 100,
    tax : 1.2,
    totalPrice : function(){
        var calulation = purchase1.shoes * purchase1.tax;
        console.log('Total Price: ',calulation);
    }
}
purchase1.totalPrice();

//oop 2

var purchase2 = {
    shoes : 50,
    tax : 1.2,
    totalPrice : function(){
        var calulation = purchase2.shoes * purchase2.tax;
        console.log('Total Price: ',calulation);
    }
}
purchase2.totalPrice();

//oop3

var purchase3 = {
    shoes : 100,
    tax : 1.2,
    totalPrice : function(){
        var calulation = this.shoes * this.tax;
        console.log('Total Price: ',calulation);
    }
}
purchase3.totalPrice();


var purchase4 = {
    shoes : 50,
    tax : 1.2,
    totalPrice : function(){
        var calulation = this.shoes * this.tax;
        console.log('Total Price: ',calulation);
    }
}
purchase4.totalPrice();