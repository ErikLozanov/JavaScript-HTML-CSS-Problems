// function getPersons() {
//     let arr = [];
// class Person {

//     constructor(fName,lName,age,email) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.email = email;
//     }
//     toString() {
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

//     }
// }
// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// let person2 = new Person('SoftUni');
// let person3 = new Person('Stephan', 'Johnson', 25,);
// let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

// arr = [person,person2,person3,person4];
//     for(let obj of arr) {
//         if(obj.firstName === undefined) {
//             delete obj.firstName;
//         }
//         if(obj.lastName === undefined) {
//             delete obj.lastName;
//         }
//         if(obj.age === undefined) {
//             delete obj.age;
//         }
//         if(obj.email === undefined) {
//             delete obj.email;
//         }
//     }
//     return arr;
// }
// getPersons();


function getPersons() {
 
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
 
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
 
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), new Person('SoftUni'), new Person('Stephan', 'Johnson', 25), new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}
 
console.table(getPersons());