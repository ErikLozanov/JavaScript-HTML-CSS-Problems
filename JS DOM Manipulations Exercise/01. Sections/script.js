function create(words) {
   let resultElement = document.getElementById('content');

   for(let word of words) {

      let createDivElement = document.createElement('div');
      let createPelement = document.createElement('p');
      createPelement.textContent = word;
      createPelement.style.display ='none';
      createDivElement.appendChild(createPelement);
      resultElement.appendChild(createDivElement);
   }
   
   resultElement.addEventListener('click', function(e) {
      if(e.target.id == 'content') {
         return
      }
      
      if(e.target.nodeName === 'P') {
         e.target.style.display ='none';
      } else {
         e.target.firstChild.style.display = 'block';
      }
   })
}