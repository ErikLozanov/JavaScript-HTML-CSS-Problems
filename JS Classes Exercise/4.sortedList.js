class List {
  constructor(arr = []) {
    this.arr = arr.sort((a, b) => a - b);
    this.size = this.arr.length;
  }
  add(el) {
    this.arr.push(el);
    this.arr = this.arr.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (index < 0 || index >= this.list.length) {
      throw new Error();
    }

    this.arr.splice(index, 1);
    this.size--;
    return;
  }
  get(index) {
    if (index < 0 || index >= this.list.length) {
      throw new Error();
    }
    return this.arr[index];
  }
}

let myList = new List();
for (let i = 0; i < 5; i++) {
  myList.add(i);
}
myList.remove(0);
