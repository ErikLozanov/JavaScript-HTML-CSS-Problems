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

    if (
      fName == "" ||
      lName == "" ||
      age == "" ||
      storyTitle == "" ||
      story == ""
    ) {
      return;
    }
    console.log(story);
  });
}
