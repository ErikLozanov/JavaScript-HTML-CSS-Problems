function solve() {
  let textSplit = document
    .getElementById("input")
    .value.split(".")
    .filter((e) => e.length > 0);
  let outputElement = document.getElementById("output");

  for (let i = 0; i < textSplit.length; i += 3) {
    let output = [];
    for (let j = 0; j < 3; j++) {
      if (textSplit[i + j]) {
        output.push(textSplit[i + j]);
      }
    }
    let res = output.join(". ") + ".";
    outputElement.innerHTML += `<p>${res}</p>`;
  }
}
function solve() {
  let text = document
    .getElementById("input")
    .value.split(".")
    .filter((e) => e);
  let output = [];

  for (i = 0; i < text.length; i++) {
    let sentence = text[i];
    if (sentence.length > 0) {
      if (i % 3 === 0 && i != text.length - 1) {
        output.push("<p>" + sentence + ".");
      } else if (i % 3 === 1 && i != text.length - 1) {
        output.push(sentence + ".");
      } else if (i % 3 === 2 && i != text.length - 1) {
        output.push(sentence + "." + "</p>");
      } else {
        if (i % 3 === 0 && i === text.length - 1) {
          output.push("<p>" + sentence + "." + "</p>");
        } else {
          output.push(sentence + "." + "</p>");
        }
      }
    }
  }
  document.getElementById("output").innerHTML = output.join(" ");
}
