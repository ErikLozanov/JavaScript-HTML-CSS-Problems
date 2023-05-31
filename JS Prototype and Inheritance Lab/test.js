let person = {
    name: "Pesho",
    age: 20,
}

let test = Object.getOwnPropertyDescriptors(person);
for(let el in person) {
    console.log(el);
}
Object.defineProperty(person,'name',{value: 'Gosho',enumerable: false})
Object.defineProperty(person,'height',{value: 210});
console.log(JSON.stringify(person));
for(let el in person) {
    console.log(el);
}