class RefurbishedSmartphones{
        constructor(retailer = '',availableSmartphones = [],soldSmartphones = [],revenue = 0) {
            this.retailer = retailer;
            this.availableSmartphones = availableSmartphones;
            this.soldSmartphones = soldSmartphones;
            this.revenue = revenue;
        }
        addSmartphone(model,storage,price,condition) {
            if(model == '' || storage < 0 || price < 0 || condition == '') {
                throw new Error("Invalid smartphone!");
            } else {

            this.availableSmartphones.push({model: model, storage: storage,price: Number(price), condition: condition});
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
        }
        }

        sellSmartphone(model, desiredStorage) {
            let isFound = this.availableSmartphones.find(x=> x.model === model);
      
                if(!isFound) {
                    throw new Error(`${model} was not found!`);
                } else {
                    if(isFound.storage >= desiredStorage) {

                    }
                    else if(Math.abs(isFound.storage - desiredStorage) <= 128) {
                        isFound.price = isFound.price * 0.9;
                    } else if(Math.abs(isFound.storage - desiredStorage) > 128) {
                        isFound.price = isFound.price * 0.8;
                    }
                    this.soldSmartphones.push({model: isFound.model, storage: isFound.storage, soldPrice: isFound.price});
                    this.availableSmartphones.filter(x => x.model != model);
                    this.revenue += isFound.price;
                    return `${model} was sold for ${(isFound.price).toFixed(2)}$`
                
            }
        }
        
        upgradePhones() {
            if(this.availableSmartphones.length === 0 ) {
                throw new Error('There are no available smartphones!');
            }
            for(let phone of this.availableSmartphones) {
                phone.storage = phone.storage * 2;
            }

            let result = [];
            result.push('Upgraded Smartphones:');
            this.availableSmartphones.forEach(x=> {
                let arr = Object.values(x);
                  result.push(`${arr[0]} / ${arr[1]} GB / ${arr[3]} condition / ${arr[2].toFixed(2)}$`);
                 })
         return  result.join('\n');
        }

        salesJournal(criteria) {
            if(criteria !== 'storage' && criteria !== 'model') {
                throw new Error('Invalid criteria!');
            }
            if(criteria == 'storage') {
                this.soldSmartphones.sort((a,b)=> b.storage - a.storage);
            } else if(criteria == 'model') {
                this.soldSmartphones.sort((a,b) => a.model.localeCompare(b.model));
            }
            let result = [];
           result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
            result.push(`${this.soldSmartphones.length} smartphones sold.`);
            this.soldSmartphones.forEach(x=> {
                result.push(`${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`);
            })
            return result.join('\n');
        }
}


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));








