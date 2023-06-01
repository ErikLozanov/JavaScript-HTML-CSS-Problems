var testArray = [1, 2, 3];
    (function solve() {
        Array.prototype.last = function() {
            return this[this.length-1];
        }
        Array.prototype.skip = function(n) {
            return this.slice(n);
        }
        Array.prototype.take = function(n) {
            return this.slice(0,n+1);
        }
        Array.prototype.sum = function() {
            return this.reduce((acc,val)=> acc+val,0);
        }
        Array.prototype.average = function() {
            let total = this.reduce((acc,val)=> acc+val,0);
            return total / this.length;
        }
    })()
console.log(Array.prototype.hasOwnProperty('last'));
// expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
console.log(testArray.last());
// expect(testArray.last()).to.equal(3, 'Incorrect last element');