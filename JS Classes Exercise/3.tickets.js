function solve(input, sortParam) {
  let result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  for (let el of input) {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    let ticket = new Ticket(destination, price, status);
    result.push(ticket);
  }
  let sortedResult;
  if(sortParam === 'price') {
     sortedResult = result.sort(
        (a, b) =>
          a[sortParam] - b[sortParam]
      );
  } else {
     sortedResult = result.sort(
        (a, b) =>
          a[sortParam].localeCompare(b[sortParam])
      );
  }
  
  return sortedResult;
}
let res = solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

console.table(res);
