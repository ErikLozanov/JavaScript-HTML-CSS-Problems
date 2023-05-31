let person = {
    name: "Pesho",
    age: 20,
}


Object.defineProperty(person,'height',{value: 210,enumerable: true,writable:true});

Object.defineProperty(person, 'info', {
    get: function() {
        return `${this.name} - ${this.height}`
    },
    // set: function(tokens) {
    //     let [name,height] = tokens.split(' ');
    //     this.name = name;
    //     this.height = height;
    // }
})
person.info = 'Mako 1.56'
console.log(person.info);
