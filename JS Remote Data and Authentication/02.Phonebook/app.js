function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadPhonebook);

    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', addPhone);
    let phonebookUl = document.getElementById('phonebook');
    async function loadPhonebook() {
        phonebookUl.innerHTML = '';
        let url = 'http://localhost:3030/jsonstore/phonebook';

        let response = await fetch(url);
        let result = await response.json();

        Object.values(result).forEach(x=>{
            let li = document.createElement('li');
            li.textContent = `${x.person}: ${x.phone}`;
            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            li.appendChild(delBtn);
            phonebookUl.appendChild(li);

            delBtn.addEventListener('click',deletePhone);
            delBtn.dataset.id = x._id;
        })
    }

    async function deletePhone(e) {
        let target = e.target;
        let selectedTarget = target.dataset.id;

        let url = `http://localhost:3030/jsonstore/phonebook/${selectedTarget}`;

        let settings = {
            method: 'delete',
        }

        let response = await fetch(url,settings);
        await loadPhonebook();
    }
    
    async function addPhone() {
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        let url = 'http://localhost:3030/jsonstore/phonebook';

        let settings = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({person: person.value,phone: phone.value}),
        }

        let response = await fetch(url,settings);

        let result = await response.json();

       await loadPhonebook();
    }

}

attachEvents();