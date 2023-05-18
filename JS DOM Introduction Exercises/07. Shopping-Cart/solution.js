function solve() {
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   let addProductBtnElement = document.getElementsByClassName('shopping-cart')[0];
   let products = [];
   let totalSum = 0;
   addProductBtnElement.addEventListener('click',function(e) {
      if(e.target.nodeName === 'BUTTON') {
         let elements = e.target.parentElement.parentElement
         let elementName = elements.querySelector('.product-details .product-title').textContent;
         let elementPrice = elements.querySelector('.product-line-price').textContent;
         products.push(elementName);
         totalSum+= Number(elementPrice);
         textAreaElement.value += `Added ${elementName} for ${elementPrice} to the cart.\n`
      }
   })

}