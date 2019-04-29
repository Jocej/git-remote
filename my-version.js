class Person{
    
    constructor(name,age){
        this.tellMyName = name ;
        this.tellMyAge = age ;
    }

    thePerson(){
    console.log(`I am ${this.tellMyName} and I am ${this.tellMyAge} years old.`);

    }
    
    
}

const john = new Person("John", "40");
john.thePerson();

const mary = new Person("Mary", "35");
mary.thePerson();


class Person{
    
    constructor(name,age){
        this.tellMyName = name ;
        this.tellMyAge = age ;
    }

    thePerson(){
    console.log(`I am ${this.tellMyName} and I am ${this.tellMyAge} years old.`);

    }
    
    
}

const john = new Person("John", "40yr old");
john.thePerson();

const mary = new Person("Mary", "35yr old");
mary.thePerson();