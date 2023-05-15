function solve() {
  let textElement = document.getElementById("input").value;
  let outputElement = document.getElementById("output");
  let textSplit = textElement.split(".");
  textSplit.pop();
  let textSplitCopy = textSplit.slice();
  // outputElement.innerHTML = '';
  for(let el of textSplit) {
    if(el.length < 1) {
      return;
    }
  }
  for(let el of textSplitCopy) {
    if(textSplit.length < 3) {
    let end = textSplit.splice(0,textSplit.length);
    outputElement.innerHTML += `<p> ${end.join('.')}. </p>` 
      break;
    }
    let splicer = textSplit.splice(0,3);
    outputElement.innerHTML += `<p> ${splicer.join('.')}. </p>` 
  }
}
