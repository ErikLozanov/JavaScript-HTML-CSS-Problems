function solve() {
    let input = Array.from(arguments);

    let type = {}

    input.forEach(x=> {
        if(!type.hasOwnProperty(typeof x)) {
            type[typeof x] = 0;
        }
        type[typeof x]++;
       typeof x === 'object' ? console.log(`${typeof x}:`) : console.log(`${typeof x}: ${x}`);
    })
    let sorted = Object.entries(type).sort((a,b)=> b[1] - a[1]);
    for(let el of sorted) {

        console.log(`${el[0]} = ${el[1]}`);
    }
}
solve({ name: 'bob'}, 3.333, 9.999);