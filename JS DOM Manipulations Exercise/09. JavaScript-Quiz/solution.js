function solve() {
  let quizAnswers = Array.from(document.getElementsByClassName("quiz-answer"));
  let rightAnswers = 0;
  quizAnswers.forEach((x) => x.addEventListener("click", questions));

  let resultsInner = document.querySelector(".results-inner h1");
  function questions(e) {
    let clickedAnswer = e.target;
    let sectionParent =
      clickedAnswer.parentElement.parentElement.parentElement.parentElement;

    if (sectionParent === document.querySelector("section:nth-of-type(1)")) {
      if (clickedAnswer.textContent === "onmouseclick") {
      } else if (clickedAnswer.textContent === "onclick") {
        rightAnswers++;
      }

      document.querySelector("section:nth-of-type(1)").style.display = "none";
      document.querySelector("section:nth-of-type(2)").style.display = "block";
    } else if (
      sectionParent === document.querySelector("section:nth-of-type(2)")
    ) {
      if (clickedAnswer.textContent === "JSON.toString()") {
      } else if (clickedAnswer.textContent === "JSON.stringify()") {
        rightAnswers++;
      }

      document.querySelector("section:nth-of-type(2)").style.display = "none";
      document.querySelector("section:nth-of-type(3)").style.display = "block";
    } else if (
      sectionParent === document.querySelector("section:nth-of-type(3)")
    ) {
      if (clickedAnswer.textContent === "The DOM is your source HTML") {
      } else if (
        clickedAnswer.textContent ===
        "A programming API for HTML and XML documents"
      ) {
        rightAnswers++;
      }

      document.querySelector("section:nth-of-type(3)").style.display = "none";
      document.querySelector("#results").style.display = "block";
      if (rightAnswers === 3) {
        resultsInner.textContent = "You are recognized as top JavaScript fan!";
      } else {
        resultsInner.textContent = `You have ${rightAnswers} right answers`;
      }
    }
  }
}
