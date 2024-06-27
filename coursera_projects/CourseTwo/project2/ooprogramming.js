// Task 1: Code a Person class
class Person{
    constructor(name = 'Tom',age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.age = energy;
    }  

    sleep(energy){
        this.energy = this.energy + 10;
    }

    doSomethingFun(energy){
        this.energy = this.energy - 10;
    }
    
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0,hourlyWage = 100,name,age,energy){
        super(name,age,energy); // calling super call constructor
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    doSomethingFun(){
        super.doSomethingFun;
    }

    sleep() {
        super.sleep;
    }

    goToWork(xp){
        this.xp = this.xp + 10;
    }

}

// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker();
    intern.xp = 0
    intern.hourlyWage = 10
    intern.name = "Bob";
    intern.age = 21
    intern.energy = 110
    intern.goToWork()
    return (intern);
}

// function intern() {
//     const intern = new Worker(0,10, "Bob", 21, 110);
//     intern.goToWork();
//     return intern;
// }

// Task 4: Code a manager object, methods
function manager() {
    const manager = new Worker(100, 30, "Alice", 30, 120);
    manager.doSomethingFun();
    return manager;
}

console.log(intern());
console.log(manager());