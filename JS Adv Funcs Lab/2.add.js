let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));


function solution (num) {
    
    return function add (a) {
        return num+a;
    }
    
}

