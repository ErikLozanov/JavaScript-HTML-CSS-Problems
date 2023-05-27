function playingCards(face,suit) {
    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let obj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
    if(validCardFaces.indexOf(face) === -1) {
        throw new Error;
    }
    return `${face}${obj[suit]}`;
}
console.log(playingCards('1', 'S' )); 