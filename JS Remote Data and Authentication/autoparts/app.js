solve()

function solve() {
    let createBtn = document.getElementById('create-btn');
    createBtn.addEventListener('click',addPart);
    let loadBtn = document.getElementById('load-btn');
    loadBtn.addEventListener('click',loadParts);
    let tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click', tableAction);
}

// TASK 1
async function addPart() {

    let label = document.getElementById('part_label').value;
    let price = document.getElementById('part_price').value;
    let qty = document.getElementById('qty').value;

    const data = {
        label,
        price,
        qty
    } 

    const options = {
        method: "post",
        'Content-Type': 'application/json',
        body: JSON.stringify(data)
    }

    let url = 'http://localhost:3030/jsonstore/autoparts/';
    return await fetch(url,options);
}

// TASK 2
async function loadParts() {

    let url = 'http://localhost:3030/jsonstore/autoparts/';

    let response = await fetch(url);

    let data = await response.json();

    let rows = Object.values(data).map(createRow);
    document.getElementById('table-body').replaceChildren(...rows);
}

// TASK 3
function createRow(record) {
    const element = document.createElement('tr');
    let tdId = document.createElement('td');
    tdId.textContent = record._id;
    let tdLabel = document.createElement('td');
    tdLabel.textContent = record.label;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = record.price;
    let tdQty = document.createElement('td');
    tdQty.textContent = record.qty;
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('del-btn');
    delBtn.setAttribute('data-id', record._id);
    element.appendChild(tdId);
    element.appendChild(tdLabel);
    element.appendChild(tdPrice);
    element.appendChild(tdQty);
    element.appendChild(delBtn);
    return element;
}

// TASK 4
function tableAction (el) {
    const target = el.target;
    if(target.tagName == 'BUTTON') {

        if(target.classList.contains('del-btn')) {
            deleteRecord(target.dataset.id);
        }
    }
}

// TASK 5

async function deleteRecord(recordId) {
    const url = 'http://localhost:3030/jsonstore/autoparts/' + recordId;
    const options = {
        method: 'delete'
    }

    const response = await fetch(url,options);
    loadParts();
}