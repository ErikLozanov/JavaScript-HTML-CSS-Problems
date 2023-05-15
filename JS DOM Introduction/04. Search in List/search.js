function search() {
   let townElements = document.getElementsByTagName('li')
   let townElementsArr = Array.from(townElements);
   let searchTextElement = document.getElementById('searchText').value;
   let matchesCounter = 0;
   let matchResultElement = document.getElementById('result');
   if(searchTextElement.length === 0) {
   matchResultElement.textContent = `Please insert any keywords.`
   townElementsArr.forEach(x => x.style='text-decoration: none ; font-weight: normal;')

      return;
   }
   townElementsArr.forEach(x => x.style='text-decoration: none ; font-weight: normal;')
   for(let town of townElementsArr) {

      if(town.textContent.includes(searchTextElement)) {
         town.style ='text-decoration: underline ; font-weight: bold;';
         matchesCounter++;
      }
   }
   matchResultElement.textContent = `${matchesCounter} matches found`
}

