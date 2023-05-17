function solve() {
    let firstOptElement = document.createElement('option');
    let secondOptElement = document.createElement('option');
    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal';
    firstOptElement.textContent = 'Binary';
    secondOptElement.textContent = 'Hexadecimal';

    let menuDropDown = document.getElementById('selectMenuTo');
    menuDropDown.appendChild(firstOptElement);
    menuDropDown.appendChild(secondOptElement);

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener("click", function () {
        let inputNumber = document.getElementById('input');

        let outputResult = document.getElementById('result');

        if(menuDropDown.value === 'binary') {
            outputResult.value = Number(inputNumber.value).toString(2).toUpperCase();
        } else if(menuDropDown.value ==='hexadecimal') {
            outputResult.value = Number(inputNumber.value).toString(16).toUpperCase();
        }
    })
}