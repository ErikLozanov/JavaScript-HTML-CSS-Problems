class VegetableStore{

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        let addedVegs = [];
        for(let vegetable of vegetables) {
        let [type,quantity,price] = vegetable.split(' ');
        let isFound = this.availableProducts.find(x=> x.type == type);

        if(!isFound) {
            this.availableProducts.push({type,quantity: Number(quantity),price: Number(price)});
        addedVegs.push(type);
        } else {
            isFound.quantity += Number(quantity);
                isFound.price = Math.max(price,isFound.price);
            
        }
    }
    return `Successfully added ${addedVegs.join(', ')}`;
    }
    buyingVegetables(selectedVegetables){
        let totalPrice = 0;
        for(let neededVegs of selectedVegetables) {
            let [type,quantity] = neededVegs.split(' ');
            quantity = Number(quantity);
            let isFound = this.availableProducts.find(x=> x.type == type);
            if(!isFound) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(isFound.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += isFound.price * quantity;
            isFound.quantity -= quantity;

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type,quantity){
        let isFound = this.availableProducts.find(x=> x.type == type);
        quantity = Number(quantity);
        if(!isFound) {
            throw new Error(`${type} is not available in the store.`);
        }
        if(quantity > isFound.quantity) {
            isFound.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            isFound.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision(){ 
        let result = [];
        result.push("Available vegetables:");
        this.availableProducts.sort((a,b)=> a.price - b.price);
        this.availableProducts.forEach(x=>{ result.push(`${x.type}-${x.quantity}-$${x.price}`)});
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


