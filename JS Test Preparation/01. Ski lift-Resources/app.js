window.addEventListener("load", solve);

function solve() {
    let result = [];
  let nextStepBtn = document.getElementById("next-btn");

  let firstNameEl = document.getElementById("first-name");
  let lastNameEl = document.getElementById("last-name");
  let numberOfPplEl = document.getElementById("people-count");
  let dateEl = document.getElementById("from-date");
  let daysEl = document.getElementById("days-count");

  nextStepBtn.addEventListener("click", nextStep);
  nextStepBtn.type = "button";

  function nextStep() {
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let numberOfPpl = numberOfPplEl.value;
    let date = dateEl.value;
    let days = daysEl.value;
    result = [firstName,lastName,numberOfPpl,date,days];

    if (
      firstName == "" ||
      lastName == "" ||
      numberOfPpl == "" ||
      date == "" ||
      days == ""
    ) { 
    return;
    }

    let ulPreview = document.querySelector('.ticket-info-list');
    let liEl = document.createElement('li');
    liEl.classList.add('ticket');
    let article = document.createElement('article');
    let h3Name = document.createElement('h3');
    h3Name.textContent = `Name: ${firstName} ${lastName}`
    let pDate = document.createElement('p');
    pDate.textContent = `From date: ${date}`;
    let pDays = document.createElement('p');
    pDays.textContent = `For ${days} days`;
    let pPeople = document.createElement('p');
    pPeople.textContent = `For ${numberOfPpl} people`;
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    let continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue';
    continueBtn.classList.add('continue-btn');


    article.appendChild(h3Name);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);
    liEl.appendChild(article);
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);
    ulPreview.appendChild(liEl);
    nextStepBtn.disabled = true;
    firstNameEl.value = '';
    lastNameEl.value = '';
    numberOfPplEl.value = '';
    dateEl.value = '';
    daysEl.value = '';


    editBtn.addEventListener('click', editFunc);
    continueBtn.addEventListener('click', continueFunc);
    function editFunc() {
        nextStepBtn.disabled = false;
        firstNameEl.value = result[0];
        lastNameEl.value = result[1];
        numberOfPplEl.value = result[2];
        dateEl.value = result[3];
        daysEl.value = result[4];

        liEl.remove();
    }

    function continueFunc() {
        let ulConfirmTicket = document.querySelector('.confirm-ticket');
        liEl.querySelector('.edit-btn').remove()
        liEl.querySelector('.continue-btn').remove()
        
        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        liEl.appendChild(confirmBtn)
        liEl.appendChild(cancelBtn)
        ulConfirmTicket.appendChild(liEl);


        confirmBtn.addEventListener('click', function(){
            let divBody = document.getElementById('body');
            let divEl = document.getElementById('main');
            divEl.remove();
            let h1El = document.createElement('h1');
            h1El.id = 'thank-you';
            h1El.textContent = 'Thank you, have a nice day!';
            let backBtn = document.createElement('button');
            backBtn.id = 'back-btn';
            backBtn.textContent = 'Back';

            divBody.appendChild(h1El);
            divBody.appendChild(backBtn);


            backBtn.addEventListener('click', function(){
                window.location.reload();
            })
        })
        cancelBtn.addEventListener('click', function(){
            liEl.remove();
            nextStepBtn.disabled = false;
        })
    }
  }
}
