import {html,render} from '../../node_modules/lit-html/lit-html.js';
import { towns } from "./towns.js";
search();
function search() {

   const root = document.getElementById('towns');
   const ul = document.createElement('ul');
   const townsTemplate = (town) => html`<li>${town}</li>`
   render(towns.map(townsTemplate),ul);
   root.appendChild(ul);
   

   document.querySelector('button').addEventListener('click',(e)=>{
      let counter = 0;

      const liEls = ul.querySelectorAll('li');
      const searchText = document.getElementById('searchText').value;
      const result = document.getElementById('result');

      result.textContent = '';
      liEls.forEach(x=> {
         if(x.textContent.includes(searchText)) {
            x.classList.add('active');
            counter++;
         } else {
            x.classList.remove('active');
         }
      });
      result.textContent = `${counter} matches found`;
   })
}
