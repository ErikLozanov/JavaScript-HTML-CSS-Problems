class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName,wineType, price) {

        if(this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        } else {
            this.wines.push({wineName,wineType,price: Number(price),paid: false});
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }
    payWineBottle(wineName,price) {
        let isFound = this.wines.find(x => x.wineName == wineName);
        if(!isFound) {
            throw new Error(`${wineName} is not in the cellar.`)
        } else if(isFound.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            isFound.paid = true;
            this.bill += Number(price);
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }
    openBottle(wineName) {
        let isFound = this.wines.find(x => x.wineName == wineName);
        if(!isFound) {
            throw new Error('The wine, you\'re looking for, is not found.');
        } else if (!isFound.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            return `You drank a bottle of ${wineName}.`;
        }
    }
    cellarRevision(wineType){
        if(!wineType) {
            let result = [];
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            this.wines.forEach(x => {result.push(`${x.wineName} > ${x.wineType} - ${x.paid ? 'Has Paid' : 'Not Paid'}.`)});
            return result.join('\n');
        } else {
            let isFound = this.wines.find(x => x.wineType == wineType);

            if(!isFound) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                return `${isFound.wineName} > ${isFound.wineType} - ${isFound.paid ? 'Has Paid' : 'Not Paid'}.`;
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());



