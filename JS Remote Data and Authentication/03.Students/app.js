loadStudents();


async function loadStudents() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tbody = document.querySelector('#results tbody');
    let response = await fetch(url);

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

form.addEventListener('submit',addStudents())
