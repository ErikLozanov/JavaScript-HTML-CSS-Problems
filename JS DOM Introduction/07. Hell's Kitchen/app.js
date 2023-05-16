function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let workersElement = JSON.parse(
      document.querySelector("#inputs textarea").value
    );
    // console.log(workersElement);
    let data = {};

    for (let restaurant of workersElement) {
      let totalPaycut = 0;
      let bestSalary = 0;
      let [pizzaName, workers] = restaurant.split(" - ");
      let workersArr = workers.split(", ");
      for (let worker of workersArr) {
         let [name, paycut] = worker.split(" ");
         if (!data.hasOwnProperty(pizzaName)) {
            data[pizzaName] = {};
          }
         if (data.hasOwnProperty(pizzaName)) {
            data[pizzaName][name] = Number(paycut);
          }
        totalPaycut += Number(paycut);
      }

      totalPaycut = totalPaycut / workersArr.length;
      data[pizzaName].average = totalPaycut;

      totalPaycut = 0;
    }

    // console.log(data);
    let bestOne = document.querySelector("#bestRestaurant p");
    let bestWorkers = document.querySelector("#workers p");
    let bestR = bestRestaurantCalc(data);
    let bestSalary = bestSalaryFunc(data,bestR);
    bestOne.textContent = `Name: ${bestR} Average Salary: ${(data[bestR].average).toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
   //  console.log(data[bestR].average);
   //  console.log(data[bestR].bestSalary);
    bestWorkers.textContent = bestWorkersCalc(data, bestR);

    function bestRestaurantCalc(data) {
      let best = "";
      let bestAvgSalary = 0;
      for (let restaurant of Object.entries(data)) {
        let average = restaurant[1].average;
        if (average > bestAvgSalary) {
          bestAvgSalary = average;
          best = restaurant[0];
        }
      }
      return best;
    }
    function bestWorkersCalc(data, bestR) {
      let textLog = "";
      let bestRestaurant = data[bestR];
      delete bestRestaurant.average;
      let sortedBest = Object.entries(bestRestaurant).sort(
        (a, b) => b[1] - a[1]
      );
      for ([worker, salary] of sortedBest) {
        textLog += `Name: ${worker} With Salary: ${salary} `;
      }
      return textLog;
    }
    function bestSalaryFunc(data,bestR) {
      let bestRestaurant = data[bestR];
      let sortedBest = Object.entries(bestRestaurant).sort(
        (a, b) => b[1] - a[1]
      );
      console.log(sortedBest);
      return Number(sortedBest[0][1]);
    }
  }
}
