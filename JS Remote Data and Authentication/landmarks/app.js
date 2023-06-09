let createForm = document.getElementById('create');
createForm.addEventListener('submit', addLandMark);
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

    let _idEl = document.getElementById('editId');
    let nameEl = document.getElementById('edit-name');
    let areaEl = document.getElementById('edit-area');
    let dateStartEl = document.getElementById('edit-dateStart');
    let dateEndEl = document.getElementById('edit-dateEnd');


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

    _idEl.value = '';
    nameEl.value = '';
    areaEl.value = '';
    dateStartEl.value = '';
    dateEndEl.value = '';

    await loadLandMarks();
}

async function addLandMark(e) {
    e.preventDefault();
    let target = e.target;
    let formData = new FormData(target);
    // let landmark = Object.fromEntries(formData.entries());
    let landmark = {
        name: formData.get('name'),
        area: formData.get('area'),
        dateStart: formData.get('dateStart'),
        dateEnd: formData.get('dateEnd')
    }
    console.log(formData.get('area'));
    let url = 'http://localhost:3030/jsonstore/landmarks';

    let settings = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(landmark),
        // body: JSON.stringify({name: landmark.name,area: landmark.area,dateStart: landmark.dateStart, dateEnd: landmark.dateEnd}),
    }

    let response = await fetch(url,settings);

    let data = await response.json();



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