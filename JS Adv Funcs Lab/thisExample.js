// 'this' example
let person = {
    name: 'Pesho',
    age: 29,
    hobies: ['Skiing', 'Climbing', 'Kayaking'],
    celebrateBirthday() {
        function printCelebration() {
            console.log(this);
            let random = Math.trunc(Math.random() * this.hobies.length);
            console.log(`${this.name} celebrated ${this.age} years of age by going ${this.hobies[random]}`);
        }
 
        this.age += 1;
 
        if(this.age % 10 === 0) {
            let bound = printCelebration.bind(person);
            bound();
        }
 
        printCelebration();
    },
    celebrateBirthday2() {
        let a = 20;
        let printCelebration = () => {
            console.log(this);
            let random = Math.trunc(Math.random() * this.hobies.length);
            console.log(`${this.name} celebrated ${this.age} years of age by going ${this.hobies[random]}`);
        }
 
        this.age += 1;
        console.log(a);
 
        if(this.age % 10 === 0) {
            printCelebration();
        }
 
        console.log(a);
 
        printCelebration();
    }
}
 let bounding = person.celebrateBirthday;
bounding();
// person.celebrateBirthday2();
 
// 'this' example 2
let employee = {
    name: 'pesho',
    age: 29,
    address: {
        street: 'Some street',
        number: 20,
        printAddress() {
            console.log(`${this.name}'s address is ${this.street} ${this.number}`);
            console.log(this);
        },
        printAddress2: () => {
            console.log(`${this.name}'s address is ${this.street} ${this.number}`);
            console.log(this);
        }
    }
}
 
employee.address.printAddress();
// employee.address.printAddress2();