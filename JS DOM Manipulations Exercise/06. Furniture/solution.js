function solve() {
  let inputElementText = document.querySelector(
    "#exercise textarea:nth-of-type(1)"
  );
  let generateBtn = document.querySelector("#exercise button:nth-of-type(1)");
  let buyBtn = document.querySelector("#exercise button:nth-of-type(2)");
  let tbodyElement = document.querySelector("tbody");
  let markBoxTd = document.querySelector("tbody tr td:nth-of-type(5)");
  let outputArea = document.querySelector("#exercise textarea:nth-of-type(2)");
  markBoxTd.lastElementChild.disabled = false;
  let shoppingCart = [];
  let totalPrice = 0;
  let totalDecFactor = [];
  generateBtn.addEventListener("click", generate);

  buyBtn.addEventListener("click", () => {
    let totalDecFacNumber = totalDecFactor.reduce((acc, val) => acc + val, 0);
    let averageDecFac = totalDecFacNumber / totalDecFactor.length;

    // outputArea.value = `Bought furniture: ${shoppingCart.join(', ')}`;
    // outputArea.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    // outputArea.value += `\nAverage decoration factor: ${averageDecFac}`;

    outputArea.value = `Bought furniture: ${shoppingCart.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFac}`;
  });

  tbodyElement.addEventListener("click", checkboxChecker);

  function generate() {
    let parsedInput = JSON.parse(inputElementText.value);
    for (let el of parsedInput) {
      let newTrElement = document.createElement("tr");
      for (let key of Object.keys(el)) {
        let imgChecker = false;
        let newTdElement = document.createElement("td");
        if (key === "img") {
          let imgElement = document.createElement("img");
          imgElement.src = el[key];
          newTdElement.appendChild(imgElement);
          imgChecker = true;
        } else {
          let pElement = document.createElement("p");
          pElement.textContent = el[key];
          newTdElement.appendChild(pElement);
        }
        if (imgChecker) {
          newTrElement.insertBefore(newTdElement, newTrElement.firstChild);
        } else {
          newTrElement.appendChild(newTdElement);
        }
      }
      //  <input type="checkbox">
      let tdForCheckBox = document.createElement("td");
      let inputForCheckBox = document.createElement("input");
      inputForCheckBox.type = "checkbox";
      tdForCheckBox.appendChild(inputForCheckBox);
      // let markBoxClone = markBoxTd.cloneNode(true);
      newTrElement.appendChild(tdForCheckBox);
      tbodyElement.appendChild(newTrElement);
    }
  }

  function checkboxChecker(e) {
    if (e.target.nodeName === "INPUT" && e.target.checked) {
      let parentEl = e.target.parentElement.parentElement;

      let [name, price, factor] = Array.from(
        parentEl.getElementsByTagName("p")
      );
      shoppingCart.push(name.textContent);
      totalPrice += Number(price.textContent);
      totalDecFactor.push(Number(factor.textContent));
    }
  }
}
