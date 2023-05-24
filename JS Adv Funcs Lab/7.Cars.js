function solve(commands) {

    let cars = {};

    let obj = {
        create(obj1,inherit,obj2){cars[obj1] = inherit ? Object.create(cars[obj2]):{}},
        set(name,key,value) {cars[name][key] = value;},
        print(name) {
            let result = [];
            for(let el in cars[name]){
                result.push(`${el}:${cars[name][el]}`);
            }
            console.log(result.join(','));
        }
    }
    for(let input of commands) {

        let [cmd,obj1,inherit,obj2] = input.split(' ');
        obj[cmd](obj1,inherit,obj2);
    }
}


solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
