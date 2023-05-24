function solution() {
  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let ingredients = {
      protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  }

  function actions(str) {
    let [action,item,quantity] = str.split(' ');
    quantity = Number(quantity);

    if(action === 'restock') {
        ingredients[item]+= quantity;
        return 'Success'
    } else if(action === 'prepare') {
        for(let ingredient in recipes[item]) {
            if(recipes[item][ingredient] * quantity > ingredients[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
            for(let ingredient in recipes[item]) {
                let neededIngredient = recipes[item][ingredient] * quantity;
                ingredients[ingredient]-= neededIngredient
            }
            return 'Success';
        }
    } else if(action ==='report') {
        let result = [];
        for(let ingredient in ingredients) {
            result.push(`${ingredient}=${ingredients[ingredient]}`);
        }
        return result.join(' ');
    }
  }
  return actions;
}

let manager = solution();
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in
console.log(manager("report")); // Error: not enough carbohydrate in
