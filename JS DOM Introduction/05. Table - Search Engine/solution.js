function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
   let studentInfoElements = document.querySelectorAll('tbody tr')
   let searchFieldElement = document.getElementById('searchField').value;
   studentInfoElements.forEach(x=> x.classList.remove('select'))
   if(searchFieldElement.length === 0) {
      return;
   }
   for(let row of studentInfoElements) {
      let infoChecker = row.textContent.replace(/\s /g,'').trim();
      if(infoChecker.includes(searchFieldElement)) {
         row.className = 'select';
      }
   }
   }
}