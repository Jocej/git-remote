class Vehicle{
    constructor(color, model) {
        this.colorVehicle = color;
        this.modelVehicle = model;
    }


myCar(){
    console.log(`I have a ${this.colorVehicle} ${this.modelVehicle}.`);
}
}

const voiture = new Vehicle("Bleue", "Simca 1000")
voiture.myCar();

class Car extends Vehicle {
    constructor(color, model, engine){
    super(color, model);
        this.carEngine = engine;
    }
    myCar() {
console.log(`My car is ${color}.`)
    }
displayCar(){
    console.log(`And my car has a ${engine}.`);
}
    
}

class Moto extends Vehicle{
    constructor(color, model, wheels){
        color(color, model);
        this.motoWheels(wheels);
    }
}
Collapse




