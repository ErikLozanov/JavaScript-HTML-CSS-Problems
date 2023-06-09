class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(model == '' || (!Number.isInteger(horsepower) || horsepower < 0) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({model,horsepower,price,mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model,desiredMileage) {
        let desiredModelFound = this.availableCars.find(x=> x.model == model);

        if(!desiredModelFound) {
            throw new Error(`${model} was not found!`);
        }
        let mileageDifference = desiredModelFound.mileage - desiredMileage;
        if(desiredModelFound.mileage <= desiredMileage) {

        } else if(mileageDifference <= 40000) {
            desiredModelFound.price *= 0.95;
        } else if(mileageDifference > 40000) {
            desiredModelFound.price *= 0.9;
        }
        let soldCar = this.availableCars.filter(x=> x.model == model);
        this.soldCars.push({model, horsepower:desiredModelFound.horsepower, soldPrice: desiredModelFound.price });
        this.totalIncome += desiredModelFound.price;
        return `${model} was sold for ${(desiredModelFound.price).toFixed(2)}$`;
    }
    currentCar() {

        if(this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        let result = [];
        result.push('-Available cars:');
        this.availableCars.forEach(x=> result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
        return result.join('\n');
    }
    salesReport(criteria) {
        if(criteria == 'horsepower') {
        this.soldCars.sort((a,b)=> b.horsepower - a.horsepower);

        } else if (criteria == 'model')  {
            this.soldCars.sort((a,b)=> a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }
        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(x=> result.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



