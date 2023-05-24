function cars(input) {
    let result = [];


    for(let el of input) {
        if(el.includes('inherit')) {
            let [not,obj,no,obj1] = el.split(' ');

        } else if(el.includes('set')) {
            let [cmd,obj,property,value] = el.split(' ');

            result.obj[property] = value;
        } else if(el.includes('print')) {
            let [cmd,objName] = el.split(' ');
            console.log(result.objName);
        }
        
        else {
        let [cmd,name] = el.split(' ');

        name = {};
        result.push(name);
        }
        
    }
}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
