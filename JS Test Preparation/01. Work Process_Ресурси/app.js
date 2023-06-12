function solve() {
  let fNameEl = document.getElementById("fname");
  let lNameEl = document.getElementById("lname");
  let emailEl = document.getElementById("email");
  let birthEl = document.getElementById("birth");
  let positionEl = document.getElementById("position");
  let salaryEl = document.getElementById("salary");

  let hireBtn = document.getElementById("add-worker");
  hireBtn.type = "button";

  hireBtn.addEventListener("click", () => {
    let fName = fNameEl.value;
    let lName = lNameEl.value;
    let email = emailEl.value;
    let birth = birthEl.value;
    let position = positionEl.value;
    let salary = salaryEl.value;

    if (
      fName == "" ||
      lName == "" ||
      email == "" ||
      birth == "" ||
      position == "" ||
      salary == ""
    ) {
        return;
    }

    let tbodyEl = document.getElementById('tbody');

    let tr = document.createElement('tr');
    let tdfName = document.createElement('td');
    tdfName.textContent = fName;
    let tdlName = document.createElement('td');
    tdlName.textContent = lName;
    let tdEmail = document.createElement('td');
    tdEmail.textContent = email;
    let tdBirth = document.createElement('td');
    tdBirth.textContent = birth;
    let tdPosition = document.createElement('td');
    tdPosition.textContent = position;
    let tdSalary = document.createElement('td');
    tdSalary.textContent = salary;

    let tdBtns = document.createElement('td');
    let firedBtn = document.createElement('button');
    firedBtn.classList.add('fired');
    firedBtn.textContent = 'Fired';
    let editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    tdBtns.appendChild(firedBtn);
    tdBtns.appendChild(editBtn);

    tr.appendChild(tdfName);
    tr.appendChild(tdlName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBirth);
    tr.appendChild(tdPosition);
    tr.appendChild(tdSalary);
    tr.appendChild(tdBtns);

    tbodyEl.appendChild(tr);


    fNameEl.value = '';
    lNameEl.value = '';
    emailEl.value = '';
    birthEl.value = '';
    positionEl.value = '';
    salaryEl.value = '';


    let budgetSalary = document.getElementById('sum');
    budgetSalary.textContent = (Number(budgetSalary.textContent) + Number(salary)).toFixed(2);


    editBtn.addEventListener('click',()=>{
        tr.remove();

        fNameEl.value = fName;
        lNameEl.value = lName;
        emailEl.value = email;
        birthEl.value = birth;
        positionEl.value = position;
        salaryEl.value = salary;

        budgetSalary.textContent = (Number(budgetSalary.textContent) - Number(salary)).toFixed(2);
    })
  });
}
solve();
