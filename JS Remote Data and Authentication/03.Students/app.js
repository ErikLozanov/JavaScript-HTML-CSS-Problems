loadStudents();


async function loadStudents() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tbody = document.querySelector('#results tbody');
    let response = await fetch(url);
    tbody.innerHTML = '';
    let result = await response.json();

    Object.values(result).forEach(x=> {
        let tr = createRows(x.firstName,x.lastName,x.facultyNumber,x.grade);
        tbody.appendChild(tr);
    })
}

function createRows(firstName,lastName,facultyNum,grade) {
    let tr = document.createElement('tr');
    let tdFirstName = document.createElement('td');
    tdFirstName.textContent = firstName;
    let tdLastName = document.createElement('td');
    tdLastName.textContent = lastName;
    let tdFacultyNum = document.createElement('td');
    tdFacultyNum.textContent = facultyNum;
    let tdGrade = document.createElement('td');
    tdGrade.textContent = grade;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdFacultyNum);
    tr.appendChild(tdGrade);

    return tr;
}

let form = document.getElementById('form');

form.addEventListener('submit',addStudent);


async function addStudent(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let url = 'http://localhost:3030/jsonstore/collections/students';
    let body = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade')
    }

    let settings = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    }

    let response = await fetch(url,settings);

    await loadStudents();
}
