class Stringer{
    constructor(string,length) {
        this.innerString = string;
        this.innerLength = length;
    }
    toString() {
        return this.innerString;
    }
    decrease(index) {
        if(this.innerString.length - index < 0) {
            index = 0;
        }
        return this.innerString = this.innerString.slice(0,index-1) + ".".repeat(index);
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
