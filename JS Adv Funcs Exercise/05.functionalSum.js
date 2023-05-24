function add () {
    let sum = 0;

    return function(n) {
      return  sum+=n;
    }
}
console.log(add(1)(6)(-3).toString()); 