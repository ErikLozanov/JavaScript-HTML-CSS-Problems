// let person = {
//     name: "Pesho",
//     age: 20,
// }


// Object.defineProperty(person,'height',{value: 210,enumerable: true,writable:true});

// Object.defineProperty(person, 'info', {
//     get: function() {
//         return `${this.name} - ${this.height}`
//     },
//     set: function(tokens) {
//         let [name,height] = tokens.split(' ');
//         this.name = name;
//         this.height = height;
//     }
// })
// person.info = 'Mako 1.56'
// console.log(person.info);

// ---------------------------------------------------------------
// function Person(name,height,age) {
//     this.name = name;
//     this.height = height;
//     this.age = age;
// }
// Person.prototype.greet = function() {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// }

// let person = new Person('Lionka', 190,23);
// person.greet();
// ---------------------------------------------------------------
let dog = {
    name: 'Default Dog',
    bark() {
        console.log(`${this.name} says Bark Bark!`);
    }
}

let myDog = Object.create(dog);
myDog.name = 'Marcho';
myDog.bark()