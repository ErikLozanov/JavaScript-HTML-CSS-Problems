window.addEventListener("load", solve);

function solve() {
  let nextBtn = document.getElementById("next-btn");
  nextBtn.type = "button";

  let fNameEl = document.getElementById("first-name");
  let lNameEl = document.getElementById("last-name");
  let checkInEl = document.getElementById("date-in");
  let checkOutEl = document.getElementById("date-out");
  let guestNumEl = document.getElementById("people-count");

  nextBtn.addEventListener("click", function () {
    let result = [];
    let fName = fNameEl.value;
    let lName = lNameEl.value;
    let checkIn = checkInEl.value.split("-");
    let checkOut = checkOutEl.value.split("-");
    let guestNum = guestNumEl.value;

    let checkInDate = new Date(checkIn[0], checkIn[1], checkIn[2]);
    let checkOutDate = new Date(checkOut[0], checkOut[1], checkOut[2]);

    if (
      fName == "" ||
      lName == "" ||
      checkIn == "" ||
      checkOut == "" ||
      guestNum == "" ||
      checkInDate > checkOutDate
    ) {
        return;
    }
    
    let ulInfoEl = document.querySelector('.info-list');
    let liEl = document.createElement('li');
    liEl.classList.add('reservation-content');
    let articleEl = document.createElement('article');
    let h3Name = document.createElement('h3');
    h3Name.textContent = `Name: ${fName} ${lName}`;
    let pFromDate = document.createElement('p');
    pFromDate.textContent = `From date: ${checkInEl.value}`;
    let pToDate = document.createElement('p');
    pToDate.textContent = `To date: ${checkOutEl.value}`;
    let pGuestsNum = document.createElement('p');
    pGuestsNum.textContent = `For ${guestNum} people`;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    let continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue';
    continueBtn.classList.add('continue-btn');

    articleEl.appendChild(h3Name);
    articleEl.appendChild(pFromDate);
    articleEl.appendChild(pToDate);
    articleEl.appendChild(pGuestsNum);
    liEl.appendChild(articleEl);
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);
    ulInfoEl.appendChild(liEl);

    result = [fName,lName,checkInEl.value,checkOutEl.value,guestNum];

    fNameEl.value = '';
    lNameEl.value = '';
    checkInEl.value = '';
    checkOutEl.value = '';
    guestNumEl.value = '';

    nextBtn.disabled = true;

    editBtn.addEventListener('click',function(){
        fNameEl.value = result[0];
        lNameEl.value = result[1];
        checkInEl.value = result[2];
        checkOutEl.value = result[3];
        guestNumEl.value = result[4];

    nextBtn.disabled = false;
        liEl.remove();
    })

    continueBtn.addEventListener('click', function(){
        let confirmUl = document.querySelector('.confirm-list');
        liEl.querySelector('button').remove();
        liEl.querySelector('button').remove();
        confirmUl.appendChild(liEl);

        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.classList.add('confirm-btn')
        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-btn');

        liEl.appendChild(confirmBtn);
        liEl.appendChild(cancelBtn);

        confirmBtn.addEventListener('click',function(){
            liEl.remove();
            nextBtn.disabled = false;

            let h1El = document.getElementById('verification');
            h1El.classList.add('reservation-confirmed');
            h1El.textContent = 'Confirmed.';
        })

        cancelBtn.addEventListener('click', function(){
            nextBtn.disabled = false;

            liEl.remove();
            let h1El = document.getElementById('verification');
            h1El.textContent = 'Cancelled.';
            h1El.classList.add('reservation-cancelled');
        })
    })
  });
}
