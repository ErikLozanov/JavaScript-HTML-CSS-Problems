let createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click',addLandMark);
let loadBtn = document.getElementById('loadBtn');
loadBtn.addEventListener('click', loadLandMarks);
let tbody = document.getElementById('body');
let editBtn = document.getElementById('editBtn');
editBtn.addEventListener('click',editLandMark);

async function loadLandMarks() {
    [...tbody.children].forEach(x=>x.remove());
    let url = 'http://localhost:3030/jsonstore/landmarks';

    let response = await fetch(url);
    let data = await response.json();
    
    Object.values(data).forEach(x=>{
    let trEl = createLandMark(x._id,x.name,x.area,x.dateStart,x.dateEnd);
    tbody.appendChild(trEl);

    })
}

async function deleteLandMark(e) {
    let selected = e.target;
    let selectedId = selected.dataset.id;

    let url = `http://localhost:3030/jsonstore/landmarks/${selectedId}`;

    let settings = {
        method: 'delete',
    }
    
    let response = await fetch(url,settings);
    let data = await response.json();

   await loadLandMarks();
}

async function loadEdit(e) {
    let selected = e.target;
    let selectedId = selected.dataset.id;

    let url = `http://localhost:3030/jsonstore/landmarks/${selectedId}`;

    let response = await fetch(url);
    let result = await response.json();
    

    let inputId = document.getElementById('editId');
    let name = document.getElementById('edit-name');
    let area = document.getElementById('edit-area');
    let dateStart = document.getElementById('edit-dateStart');
    let dateEnd = document.getElementById('edit-dateEnd');

    inputId.value = result._id;
    name.value = result.name;
    area.value = result.area;
    dateStart.value = result.dateStart;
    dateEnd.value = result.dateEnd;
}

async function editLandMark(e) {
    e.preventDefault();

    let _id = document.getElementById('editId').value;
    let name = document.getElementById('edit-name').value;
    let area = document.getElementById('edit-area').value;
    let dateStart = document.getElementById('edit-dateStart').value;
    let dateEnd = document.getElementById('edit-dateEnd').value;


    let url = `http://localhost:3030/jsonstore/landmarks/${_id}`;

    let settings = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_id,name,area,dateStart,dateEnd}),
    }

    let response = await fetch(url,settings);

    let data = await response.json();

    // inputId = '';
    // name = '';
    // area = '';
    // dateStart = '';
    // dateEnd = '';

    await loadLandMarks();
}

async function addLandMark(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let area = document.getElementById('area').value;
    let dateStart = document.getElementById('dateStart').value;
    let dateEnd = document.getElementById('dateEnd').value;

    let url = 'http://localhost:3030/jsonstore/landmarks';

    let settings = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name,area,dateStart,dateEnd}),
    }

    let response = await fetch(url,settings);

    let data = await response.json();

    console.log(data);

   await loadLandMarks();
}

function createLandMark(id,name,area,dateStart,dateEnd) {

    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.textContent = name;
    let tdArea = document.createElement('td');
    tdArea.textContent = area;
    let tdDateStart = document.createElement('td');
    tdDateStart.textContent = dateStart;
    let tdDateEnd = document.createElement('td');
    tdDateEnd.textContent = dateEnd;
    let tdDelete = document.createElement('td');
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.dataset.id = id;
    tdDelete.appendChild(delBtn);
    delBtn.addEventListener('click',deleteLandMark);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.dataset.id = id;
    tdDelete.appendChild(editBtn);
    editBtn.addEventListener('click',loadEdit);

    tr.appendChild(tdName);
    tr.appendChild(tdArea);
    tr.appendChild(tdDateStart);
    tr.appendChild(tdDateEnd);
    tr.appendChild(tdDelete);
    return tr;
}