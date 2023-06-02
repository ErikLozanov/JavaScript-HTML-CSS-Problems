window.addEventListener("load", solve);

function solve() {
  let addGemBtn = document.getElementById("add-btn");
    let info = [];
    let previewUl = document.getElementById('preview-list');

  addGemBtn.addEventListener("click", addGem);

  function addGem() {
    let gemName = document.getElementById("gem-name");
    let gemColor = document.getElementById("color");
    let gemCarats = document.getElementById("carats");
    let gemPrice = document.getElementById("price");
    let selectEl = document.getElementById("type");
    let selectedOption = selectEl.options[selectEl.selectedIndex].text;

    if (
      gemName.value == "" || typeof Number(gemName.value) == 'number' && !isNaN(gemName.value)||
      gemColor.value == ""|| typeof Number(gemColor.value) == 'number' && !isNaN(gemColor.value)||
      gemCarats.value == "" ||
      gemPrice.value == "" ||
      selectedOption == ''
    ) {
      return;
    }

    let liEl = document.createElement('li');
    liEl.classList.add('gem-info');
    let articleEl = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = gemName.value;
    let pColorEl = document.createElement('p');
    pColorEl.textContent = `Color: ${gemColor.value}`;
    let pCaratsEl = document.createElement('p');
    pCaratsEl.textContent = `Carats: ${gemCarats.value}`;
    let pPriceEl = document.createElement('p');
    pPriceEl.textContent = `Price: ${gemPrice.value} $`;
    let pTypeEl = document.createElement('p');
    pTypeEl.textContent = `Type: ${selectedOption}`;
    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save to Collection';
    saveBtn.classList.add('save-btn');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Information';
    editBtn.classList.add('edit-btn');
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn');

    articleEl.appendChild(h4El);
    articleEl.appendChild(pColorEl);
    articleEl.appendChild(pCaratsEl);
    articleEl.appendChild(pPriceEl);
    articleEl.appendChild(pTypeEl);
    liEl.appendChild(articleEl);
    liEl.appendChild(saveBtn);
    liEl.appendChild(editBtn);
    liEl.appendChild(cancelBtn);
    previewUl.appendChild(liEl);
    
    info = [gemName.value, gemColor.value, gemCarats.value, gemPrice.value,selectEl.selectedIndex];
    gemName.value = '';
    gemColor.value = '';
    gemCarats.value = '';
    gemPrice.value = '';
    selectEl.selectedIndex = 0;
    addGemBtn.disabled = true;

    editBtn.addEventListener('click', editFunc);
    saveBtn.addEventListener('click', saveFunc);
    cancelBtn.addEventListener('click', cancelFunc);



    function editFunc() {
        addGemBtn.disabled = false;
    
        gemName.value = info[0];
        gemColor.value = info[1];
        gemCarats.value = info[2];
        gemPrice.value = info[3];
        selectEl.selectedIndex = info[4];
    
        previewUl.removeChild(previewUl.querySelector('li'));
      }


      function saveFunc() {
        addGemBtn.disabled = false ;
        let collectionEl = document.getElementById('collection');
        previewUl.removeChild(previewUl.querySelector('li'));
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        pElement.classList.add('collection-item');
        pElement.textContent = `${info[0]} - Color: ${info[1]}/ Carats: ${info[2]}/ Price: ${info[3]}/ Type: ${selectedOption}`;
        liElement.appendChild(pElement);
        collectionEl.appendChild(liElement);
      }
    
      function cancelFunc() {
        addGemBtn.disabled = false;

        previewUl.removeChild(previewUl.querySelector('li'));
      }
  }

}
