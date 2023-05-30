function juice(input) {

    let bottles = new Map();
    let jars = new Map();
    input.forEach(x=> {
        let [juice,quantity] = x.split(' => ');
        quantity = Number(quantity);
        if(!bottles.has(juice)) {
            bottles.set(juice,quantity)
        } else {
            let more = quantity + bottles.get(juice);
            bottles.set(juice, more);
        }
        if(bottles.get(juice) >= 1000) {
            while(bottles.get(juice) >= 1000) {
                let currQuantity = bottles.get(juice)
                  currQuantity -= 1000;
                  bottles.set(juice,currQuantity)
                if(!jars.has(juice)) {
                    jars.set(juice,1);
                } else {
                    let addOne = jars.get(juice) + 1;
                    jars.set(juice,addOne);
                }
            }
        }
    })
    Array.from(jars).forEach(x=> {
        console.log(`${x[0]} => ${x[1]}`);
    })
}
juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)