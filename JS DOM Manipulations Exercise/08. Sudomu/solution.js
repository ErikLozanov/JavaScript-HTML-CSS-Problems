function solve() {
  let checkBtn = document.querySelector("td button");
  let clearBtn = document.querySelector("td button:nth-of-type(2)");
  let inputs = document.querySelectorAll("tr td input");
  let table = document.querySelector('table');
  let textParagraph = document.querySelectorAll('#check p')[0];


  checkBtn.addEventListener("click", check);

  clearBtn.addEventListener('click', clear);


  function clear () {
    Array.from(inputs).forEach(x => x.value = '');
    table.style.border ='none';
    textParagraph.textContent = '';

  }


  function check() {
  let isSudomu = true;
    let matrix = [
      [inputs[0], inputs[1], inputs[2]],
      [inputs[3], inputs[4], inputs[5]],
      [inputs[6], inputs[7], inputs[8]],
    ];


    for(let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let col = matrix.map(row=> row[i]);
        let rowArr = [];
        let colArr = [];
        row.forEach(x => rowArr.push(Number(x.value)));
        col.forEach(x => colArr.push(Number(x.value)));
        rowArr = rowArr.filter((x,i) => {
            if(rowArr.indexOf(x) !== i){
                isSudomu = false;
            }})
        colArr = colArr.filter((x,i) => {
            if(colArr.indexOf(x) !== i){
                isSudomu = false;
            }})
    }


    if(isSudomu) {
        table.style.border ='2px solid green';
        textParagraph.style.color = 'green';
        textParagraph.textContent = 'You solve it! Congratulations!';
    } else {
        table.style.border ='2px solid red';
        textParagraph.style.color = 'red';
        textParagraph.textContent = 'NOP! You are not done yet...';
    }
  }
}
