function subtract() {
    let firstNumElement = document.getElementById('firstNumber').value;
    let secondNumElement = document.getElementById('secondNumber').value;
    let sum = Number(firstNumElement) - Number(secondNumElement);
    let resultElement = document.getElementById('result');
    resultElement.textContent = sum;
}