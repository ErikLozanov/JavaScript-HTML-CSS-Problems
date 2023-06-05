window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("form-btn");

  let fNameEl = document.getElementById("first-name");
  let lNameEl = document.getElementById("last-name");
  let ageEl = document.getElementById("age");
  let storyTitleEl = document.getElementById("story-title");
  let genreEl = document.getElementById("genre");
  let storyEl = document.getElementById("story");

  publishBtn.addEventListener("click", function () {
    let fName = fNameEl.value;
    let lName = lNameEl.value;
    let age = ageEl.value;
    let storyTitle = storyTitleEl.value;
    let genre = genreEl.value;
    let story = storyEl.value;
    let result = [];
    if (
      fName == "" ||
      lName == "" ||
      age == "" ||
      storyTitle == "" ||
      story == ""
    ) {
      return;
    }
    result = [fName,lName,age,storyTitle,genre,story];

    let ulPreviewEl = document.getElementById('preview-list');
    

    let liEl = document.createElement('li');
    liEl.classList.add('story-info');
    let articleEl = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = `Name: ${fName} ${lName}`;
    let pAgeEl = document.createElement('p');
    pAgeEl.textContent = `Age: ${age}`;
    let pTitleEl = document.createElement('p');
    pTitleEl.textContent = `Title: ${storyTitle}`;
    let pGenreEl = document.createElement('p');
    pGenreEl.textContent = `Genre: ${genre}`;
    let pStoryEl = document.createElement('p');
    pStoryEl.textContent = story;

    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Story';
    saveBtn.classList.add('save-btn');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Story';
    editBtn.classList.add('edit-btn');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.classList.add('delete-btn');


    articleEl.appendChild(h4El);
    articleEl.appendChild(pAgeEl);
    articleEl.appendChild(pTitleEl);
    articleEl.appendChild(pGenreEl);
    articleEl.appendChild(pStoryEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(saveBtn);
    liEl.appendChild(editBtn);
    liEl.appendChild(deleteBtn);

    ulPreviewEl.appendChild(liEl);

    fNameEl.value = '';
    lNameEl.value = '';
    ageEl.value = '';
    storyTitleEl.value = '';
    // genreEl.value = '';
    storyEl.value = '';

    publishBtn.disabled = true;


    editBtn.addEventListener('click', function(){
      liEl.remove();

      publishBtn.disabled = false;


      fNameEl.value = result[0];
      lNameEl.value = result[1];
      ageEl.value = result[2];
      storyTitleEl.value = result[3];
      genreEl.value = result[4];
      storyEl.value = result[5]
    })

    saveBtn.addEventListener('click', function(){
      let mainDivEl = document.getElementById('main');

      mainDivEl.querySelector('div').remove();
      mainDivEl.querySelector('div').remove();

      let h1Tag = document.createElement('h1');
      h1Tag.textContent = "Your scary story is saved!";
      mainDivEl.append(h1Tag);
    })
    deleteBtn.addEventListener('click', function(){
      liEl.remove();
      publishBtn.disabled = false;
    })
  });
}
