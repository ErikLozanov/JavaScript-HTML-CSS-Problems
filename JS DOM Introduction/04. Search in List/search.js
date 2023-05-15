function search() {
   let townElements = document.getElementsByTagName('li')
   let townElementsArr = Array.from(townElements);
   let searchTextElement = document.getElementById('searchText').value;
   let matchesCounter = 0;
   townElementsArr.forEach(x => x.style='text-decoration: none ; font-weight: normal;')
   for(let town of townElementsArr) {

      if(town.textContent.includes(searchTextElement)) {
         town.style ='text-decoration: underline ; font-weight: bold;';
         matchesCounter++;
      }
   }
   let matchResultElement = document.getElementById('result');
   matchResultElement.textContent = `${matchesCounter} matches found`
}

