function encodeAndDecodeMessages() {
    let firstTextAreaEl = document.querySelector('div:nth-of-type(1) textarea');
    let encodeBtn = document.querySelector('div:nth-of-type(1) button');
    let secondTextAreaEl = document.querySelector('div:nth-of-type(2) textarea');
    let decodeBtn = document.querySelector('div:nth-of-type(2) button');

    encodeBtn.addEventListener('click', encode);

    decodeBtn.addEventListener('click', decode);

    function encode(el) {
        let givenInputMsg = firstTextAreaEl.value;
        firstTextAreaEl.value = '';
        let encodedInputMsg = '';
        for(let word of givenInputMsg) {
            let wordModifier = word.charCodeAt(0) + 1;
            encodedInputMsg += String.fromCharCode(wordModifier);
        }
        secondTextAreaEl.value = encodedInputMsg;
    }
    function decode(el) {
        let givenInputMsg = secondTextAreaEl.value;
        let decodeInputMsg = '';
        for(let word of givenInputMsg) {
            let wordModifier = word.charCodeAt(0) - 1;
            decodeInputMsg += String.fromCharCode(wordModifier);
        }
        secondTextAreaEl.value = decodeInputMsg;
    }
}