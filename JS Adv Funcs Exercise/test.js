let book = {
  title: "Hunter",
  author: "Spisarevski",
};

function bookInfo(year) {
  console.log(
    `${this.title} was written by ${this.author} and was released in ${year}`
  );
}

let bookHunter = bookInfo.bind(this, "1999");

bookHunter();

function sort(input, order) {
  return order === "asc"
    ? input.sort((a, b) => a - b)
    : input.sort((a, b) => b - a);
}
console.log(sort([14, 7, 17, 6, 8], "asc"));

;

function hi() {

  return function() {
    let a = 0;
  }
}