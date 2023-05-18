function solve() {
  let textAreaElement = document.getElementsByTagName("textarea")[0];
  let addProductBtnElement =
    document.getElementsByClassName("shopping-cart")[0];
  let checkoutBtnElement = document.querySelector('.shopping-cart .checkout');
  let allButtons = document.getElementsByTagName('button');
  let products = [];
  let totalSum = 0;
  console.log(allButtons);
  addProductBtnElement.addEventListener("click", function (e) {
    if (e.target.className === 'add-product') {
      let elements = e.target.parentElement.parentElement;
      let elementName = elements.querySelector(
        ".product-details .product-title"
      ).textContent;
      let elementPrice = elements.querySelector(
        ".product-line-price"
      ).textContent;
      if(!products.includes(elementName)) {
         products.push(elementName);
      }
      totalSum += Number(elementPrice);
      textAreaElement.value += `Added ${elementName} for ${elementPrice} to the cart.\n`;
    }
  });
  checkoutBtnElement.addEventListener("click", function () {
    textAreaElement.value += `You bought ${products.join(
      ", "
    )} for ${totalSum.toFixed(2)}.`;
    Array.from(allButtons).forEach(x=> x.disabled = 'true');
  });
}
