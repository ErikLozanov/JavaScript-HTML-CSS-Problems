function solve() {

  let [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', generate);

  buyBtn.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(document.querySelector('textarea').value);

    input.forEach(x => {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let img = document.createElement('img');
    img.src = x.img;
    td1.appendChild(img);
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    let p1 = document.createElement('p');
    p1.textContent = x.name;
    td2.appendChild(p1);
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    let p2 = document.createElement('p');
    p2.textContent = x.price;
    td3.appendChild(p2);
    tr.appendChild(td3);
    let td4 = document.createElement('td');
    let p3 = document.createElement('p');
    p3.textContent = x.decFactor;
    td4.appendChild(p3);
    tr.appendChild(td4);
    let td5 = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'checkbox';
    td5.appendChild(input);
    tr.appendChild(td5);
    document.querySelector('tbody').appendChild(tr);
    });
  }


  function buy () {
    let checkBoxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);
    let boughtItems = [];
    let decFactor = 0;
    let totalPrice = 0;
    checkBoxes.forEach(element => {
      let tdParent = element.parentElement.parentElement;
      boughtItems.push(tdParent.querySelector('td:nth-of-type(2) p').textContent);
      totalPrice+= Number(tdParent.querySelector('td:nth-of-type(3) p').textContent);
      decFactor+= Number(tdParent.querySelector('td:nth-of-type(4) p').textContent)
    })
    let outputTextArea = document.querySelector('textarea:nth-of-type(2)');
    outputTextArea.value += `Bought furniture: ${boughtItems.join(', ')}`;
    outputTextArea.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    outputTextArea.value += `\nAverage decoration factor: ${decFactor / checkBoxes.length}`;
  }

}
