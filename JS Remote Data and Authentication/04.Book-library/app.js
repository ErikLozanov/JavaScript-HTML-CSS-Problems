let loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click',loadBooks);

let form = document.querySelector('form');
form.addEventListener('submit',saveBook);

async function loadBooks() {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    let url = 'http://localhost:3030/jsonstore/collections/books';

    let response = await fetch(url);

    let result = await response.json();

    Object.values(result).forEach(x=>{
        let tr = createRows(x._id,x.author,x.title);
        tbody.appendChild(tr);
    })
}

async function saveBook(e) {
    e.preventDefault();

    let url = 'http://localhost:3030/jsonstore/collections/books';

    let formData = new FormData(form);

    let body = {
        author: formData.get('author'),
        title: formData.get('title'),
    }

    let settings = {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    }
    form.reset();
    let response = await fetch(url,settings);

    let result = await response.json();

    await loadBooks();
}

async function loadEditInfo(e) {
    let target = e.target;
    let selectedTarget = target.dataset.id;

    console.log(selectedTarget);
    let formTitle = document.querySelector('form h3');
    formTitle.textContent = 'Edit FORM';
    let submitBtn = document.querySelector('form button');
    submitBtn.style.display = 'none';
    let saveBtn = document.createElement('button');
    saveBtn.classList.add('saveBtn');
    saveBtn.textContent = 'Save'
    form.appendChild(saveBtn);
    saveBtn.addEventListener('click',editInfo)
    let editId = document.createElement('input');
    editId.type = 'hidden';
    editId.id = 'editId';
    editId.value = selectedTarget;
    
    form.appendChild(editId);

    let url = `http://localhost:3030/jsonstore/collections/books/${selectedTarget}`;

    let response = await fetch(url);

    let result = await response.json();
    
    let titleEl = document.querySelector('input[name="title"]');
    let authorEl = document.querySelector('input[name="author"]');

    titleEl.value = result.title;
    authorEl.value = result.author;
}

async function editInfo(e) {
    e.preventDefault();
    let titleEl = document.querySelector('input[name="title"]');
    let authorEl = document.querySelector('input[name="author"]');
    let id = document.getElementById('editId');
    let url = `http://localhost:3030/jsonstore/collections/books/${id.value}`;

    let body = {
        _id: id.value,
        author: authorEl.value,
        title: titleEl.value,
    }

    let settings = {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    }

    let response = await fetch(url,settings);
    titleEl.value = '';
    authorEl.value = '';
    // let result = response.json();

    let formTitle = document.querySelector('form h3');
    formTitle.textContent = 'Edit FORM';
    let submitBtn = document.querySelector('form button');
    submitBtn.style.display = 'none';

    document.querySelector('.saveBtn').style.display = 'none';
    formTitle.textContent = 'FORM';
    submitBtn.style.display = 'block';

    await loadBooks();
}


async function deleteInfo(e) {
    let id = e.currentTarget.dataset.id;
    
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;

    let settings = {
        method: 'delete',
    }

    let response = await fetch(url,settings);

    loadBooks();
}




function createRows(id,author,title) {
    let tr = document.createElement('tr');

    let tdAuthor = document.createElement('td');
    tdAuthor.textContent = author;
    let tdTitle = document.createElement('td');
    let tdButtons = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.dataset.id = id;
    editBtn.addEventListener('click', loadEditInfo);

    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.dataset.id = id;
    delBtn.addEventListener('click', deleteInfo);


    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(delBtn);

    tdTitle.textContent = title;

    tr.appendChild(tdAuthor);
    tr.appendChild(tdTitle);
    tr.appendChild(tdButtons);

    return tr;
}