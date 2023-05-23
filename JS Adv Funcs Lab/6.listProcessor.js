function solve(input) {
    let collection = [];
    for(let el of input) {
        let [cmd,value] = el.split(' ');
        obj(cmd,value);
  }
  function obj(cmd,value) {
    let innerObject = {
        add() {collection.push(value)},
        remove(){collection = collection.filter(x=> x!== value);},
        print(){console.log(collection.join(','));}
    }
    return innerObject[cmd]();
  }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
