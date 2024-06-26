// inheritance

// class Animal { /* ...class code here... */ }
// class Bird extends Animal { /* ...class code here... */ }
// class Eagle extends Bird { /* ...class code here... */ }


// encapsulation

"abc".toUpperCase();

//polymorphsim

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell();

door.bell(); // "Come here, please"

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);
ringTheBell(door);

//polymorphism using classes
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings() //calls the super class function
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
