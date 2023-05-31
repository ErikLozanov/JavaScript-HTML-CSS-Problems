function register(input) {
    let brands = {};

    input.forEach(x=>{
        let [brand,model,quantity] = x.split(' | ');
        quantity = Number(quantity);
        if(!brands.hasOwnProperty(brand)) {
            brands[brand] = {};
        }
        if(!brands[brand].hasOwnProperty(model)) {
        brands[brand][model] = quantity;

        } else {
        brands[brand][model] += quantity;
    }
    })
    for(let [brand,info] of Object.entries(brands)) {
        console.log(brand);
        for(let [model,quantity] of Object.entries(info)) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
register(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)