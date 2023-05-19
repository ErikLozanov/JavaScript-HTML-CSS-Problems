function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
    let optionEl = document.createElement('option');

    optionEl.textContent = newItemText.value;
    optionEl.value = newItemValue.value;
    menuElement.appendChild(optionEl);
    newItemText.value = '';
    newItemValue.value = '';
}