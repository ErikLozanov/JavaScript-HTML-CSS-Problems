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
      if (!data.hasOwnProperty(pizzaName)) {
        data[pizzaName] = {};
      }
      for (let worker of workersArr) {
        let [name, paycut] = worker.split(" ");
        data[pizzaName][name] = Number(paycut);
        totalPaycut += Number(paycut);
        if (Number(paycut) > bestSalary) {
          bestSalary = Number(paycut);
        }
      }

      totalPaycut = totalPaycut / workersArr.length;
      data[pizzaName].average = totalPaycut.toFixed(2);
      data[pizzaName].bestSalary = bestSalary.toFixed(2);

      totalPaycut = 0;
    }

    // console.log(data);

    let bestOne = document.querySelector("#bestRestaurant p");
    let bestWorkers = document.querySelector("#workers p");
    let bestR = bestRestaurantCalc(data);
    bestOne.textContent = `Name: ${bestR} Average Salary: ${(data[bestR].average).toFixed(2)} Best Salary: ${(data[bestR].bestSalary).toFixed(2)}`;
    bestWorkers.textContent = bestWorkersCalc(data, bestR);

    function bestRestaurantCalc(data) {
      let best = "";
      let bestCounter = 0;
      for (let restaurant of Object.entries(data)) {
        let average = restaurant[1].average;
        if (average > bestCounter) {
          bestCounter = average;
          best = restaurant[0];
        }
      }
      return best;
    }
    function bestWorkersCalc(data, bestR) {
      let textLog = "";
      let bestRestaurant = data[bestR];
      delete bestRestaurant.average;
      delete bestRestaurant.bestSalary;
      let sortedBest = Object.entries(bestRestaurant).sort(
        (a, b) => b[1] - a[1]
      );
      for ([worker, salary] of sortedBest) {
        textLog += `Name: ${worker} With Salary: ${salary} `;
      }
      return textLog.trim();
    }
  }
}
