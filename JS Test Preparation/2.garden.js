class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({plantName,spaceRequired,ripe: false,quantity: 0});
        this.spaceAvailable-= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let isFound = this.plants.find(x=> x.plantName == plantName);

        if(!isFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(isFound.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        isFound.ripe = true;
        isFound.quantity += quantity;

        if(quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if(quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {
        let isFound = this.plants.find(x=> x.plantName == plantName);
        if(!isFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(!isFound.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.storage.push({plantName: isFound.plantName, quantity: isFound.quantity});
        this.spaceAvailable += isFound.spaceRequired;
        this.plants = this.plants.filter(x=> x.plantName !== plantName);

        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let result = [];
        let plantArr = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        this.plants.sort((a,b)=> (a.plantName).localeCompare(b.plantName));
        this.plants.forEach(x=> plantArr.push(x.plantName));
       result.push(`Plants in the garden: ${plantArr.join(', ')}`);
        if(this.storage.length == 0) {
            result.push('Plants in storage: The storage is empty.');
        } else {
            let storageArr = [];
            this.storage.forEach(x=> storageArr.push(`${x.plantName} (${x.quantity})`));
            result.push(`Plants in storage: ${storageArr.join(', ')}`);
        }
        return result.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());


// assert.equal(myGarden.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("orange", 100), "The orange has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("cucumber", 30), "The cucumber has been successfully planted in the garden.");
// assert.equal(myGarden.ripenPlant("apple", 10), "10 apples have successfully ripened.");
// assert.equal(myGarden.ripenPlant("orange", 1), "1 orange has successfully ripened.");
// expect(() => myGarden.ripenPlant("orange", 4)).to.throw("The orange is already ripe.");
// expect(() => myGarden.ripenPlant("olive", 30)).to.throw("There is no olive in the garden.");
// expect(() => myGarden.ripenPlant("cucumber", -5)).to.throw("he quantity cannot be zero or negative.");






Unexpected error: expected 'The garden has 220 free space left.\n
Plants in the garden: apple, raspberry\n
Plants in the storage: orange (1)' to equal 'The garden has 220 free space left.\n
Plants in the garden: apple, raspberry\n
Plants in storage: orange (1)'