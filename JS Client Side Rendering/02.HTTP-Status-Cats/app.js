import {html,render} from '../../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
const root = document.getElementById('allCats');
const ul = document.createElement('ul');
const catsTemplate = (cat) => html`
<li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
`;

render(cats.map(catsTemplate),ul);
root.appendChild(ul);

ul.addEventListener('click',(e)=>{
    if(e.target.tagName == 'BUTTON') {
        const details = e.target.parentElement.getElementsByClassName('status')[0];
        if(details.style.display == 'block') {
            details.style.display = 'none';
            e.target.textContent = 'Show status code';
        } else {
            e.target.textContent = 'Hide status code';
            details.style.display = 'block';

        }
    }
})
