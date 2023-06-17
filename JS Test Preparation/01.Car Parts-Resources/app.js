window.addEventListener("load", solve);

function solve() {
  let carModelEl = document.getElementById("car-model");
  let carYearEl = document.getElementById("car-year");
  let partNameEl = document.getElementById("part-name");
  let partNumberEl = document.getElementById("part-number");
  let conditionEl = document.getElementById("condition");

  let nextBtn = document.getElementById("next-btn");
      nextBtn.type = 'button';
  nextBtn.addEventListener("click", () => {
    let carModel = carModelEl.value;
    let carYear = carYearEl.value;
    let partName = partNameEl.value;
    let partNumber = partNumberEl.value;
    let condition = conditionEl.value;

    if (
      carModel == "" ||
      carYear == "" ||
      partName == "" ||
      partNumber == "" ||
      condition == "" ||
      (carYear < 1980 || carYear > 2023)
    ) {
        return;
    }
    
    let partInfoUl = document.querySelector('.info-list');



    let imgElement = document.getElementById('complete-img');

    imgElement.style.visibility = 'hidden';

    let paragraphEl = document.getElementById('complete-text');
    paragraphEl.textContent = '';


    let li = document.createElement('li');
    li.classList.add('part-content');
    let article = document.createElement('article');
    let pModel = document.createElement('p');
    pModel.textContent = `Car Model: ${carModel}`;
    let pYear = document.createElement('p');
    pYear.textContent = `Car Year: ${carYear}`;
    let pName = document.createElement('p');
    pName.textContent = `Part Name: ${partName}`;
    let pNumber = document.createElement('p');
    pNumber.textContent = `Part Number: ${partNumber}`;
    let pCondition = document.createElement('p');
    pCondition.textContent = `Condition: ${condition}`;


    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    let continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';


    article.appendChild(pModel);
    article.appendChild(pYear);
    article.appendChild(pName);
    article.appendChild(pNumber);
    article.appendChild(pCondition);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    partInfoUl.appendChild(li);

    carModelEl.value = '';
    carYearEl.value = '';
    partNameEl.value = '';
    partNumberEl.value = '';
    conditionEl.value = '';

    nextBtn.disabled = true;

    editBtn.addEventListener('click',()=>{
        li.remove();

        carModelEl.value = carModel;
        carYearEl.value = carYear;
        partNameEl.value = partName;
        partNumberEl.value = partNumber;
        conditionEl.value = condition;

        nextBtn.disabled = false;
    })

    continueBtn.addEventListener('click',()=>{
        let confirmListUl = document.querySelector('.confirm-list');


        li.querySelector('button').remove();
        li.querySelector('button').remove();

        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirmListUl.appendChild(li);

        confirmBtn.addEventListener('click',()=>{
                li.remove();
                nextBtn.disabled = false;

                imgElement.style.visibility = 'visible';


                paragraphEl.textContent = "Part is Ordered!";
        })

        cancelBtn.addEventListener('click',()=>{
                nextBtn.disabled = false;

                li.remove();
        })
    })
  });
}
