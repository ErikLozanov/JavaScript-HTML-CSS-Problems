function addItem() {
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    let inputElement = document.getElementById('newItemText');
    aElement.textContent = '[Delete]';
    aElement.href = '#';
    liElement.textContent = inputElement.value;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
    inputElement.value = '';
    aElement.addEventListener('click',function (e) {
        e.currentTarget.parentElement.remove();
    })
}