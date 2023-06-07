window.addEventListener("load", solve);

function solve() {
  let submitBtn = document.getElementById("form-btn");

  let firstNameEl = document.getElementById("first-name");
  let lastNameEl = document.getElementById("last-name");
  let ageEl = document.getElementById("age");
  let genderSelectEl = document.getElementById("genderSelect");
  let descriptionEl = document.getElementById("task");

  submitBtn.addEventListener("click", function () {
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let age = ageEl.value;
    let genderSelect = genderSelectEl.value;
    let description = descriptionEl.value;

    if (firstName == "" || lastName == "" || age == "" || description == "") {
      return;
    }
    
    let ulProgressEl = document.getElementById('in-progress');
    let li = document.createElement('li');
    li.classList.add('each-line');
    let article = document.createElement('article');
    let h4Name = document.createElement('h4');
    h4Name.textContent = `${firstName} ${lastName}`;
    let pGender = document.createElement('p');
    pGender.textContent = `${genderSelect}, ${age}`
    let pDescription = document.createElement('p');
    pDescription.textContent =`Dish description: ${description}`;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as complete';
    completeBtn.classList.add('complete-btn');

    article.appendChild(h4Name);
    article.appendChild(pGender);
    article.appendChild(pDescription);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    ulProgressEl.appendChild(li);

    let counterEl = document.getElementById('progress-count');
    counterEl.textContent = Number(counterEl.textContent) + 1;

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    descriptionEl.value = '';


    editBtn.addEventListener('click', function() {

      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      ageEl.value = age;
      descriptionEl.value = description;

    counterEl.textContent = Number(counterEl.textContent) - 1;

    li.remove();
    })

    completeBtn.addEventListener('click', function(){
      let ulFinished = document.getElementById('finished');
      li.querySelector('button').remove();
      li.querySelector('button').remove();
      ulFinished.appendChild(li);

    counterEl.textContent = Number(counterEl.textContent) - 1;

    })

    let clearBtn = document.getElementById('clear-btn');
    let ulFinished = document.getElementById('finished');

    clearBtn.addEventListener('click', function(){
      let allRecords = ulFinished.getElementsByTagName('li');

      for(let li of allRecords) {
        li.remove();
      }
    })
  });
}
