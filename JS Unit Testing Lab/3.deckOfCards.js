function printDeckOfCards(cards) {
    let result = [];
    let invalidCard = false;
    cards.forEach(x=>{
        result.push(createCard(x));       
    })
    function createCard (card){
    let face;
    let suit;
    if(card.includes('10')) {
        face = card.slice(0,2);
        suit = card.slice(-1);
    } else {
        face = card.slice(0,1);
        suit = card.slice(1);
    }
        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let obj = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if(!obj[suit]) {
            console.log(`Invalid card: ${card}`);
            invalidCard = true;
            return;
        }
        if(validCardFaces.indexOf(face) === -1) {
            console.log(`Invalid card: ${card}`);
            invalidCard = true;
            return;
        }
        return `${face}${obj[suit]}`;
    }
    if(invalidCard) {
        return;
    }
    console.log(result.join(' '));
   }
   printDeckOfCards(['5R', '3D', 'QD', '2C']);