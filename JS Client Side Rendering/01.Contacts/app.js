import { contacts } from "./contacts.js";
import { html,render } from '../../node_modules/lit-html/lit-html.js';

const createTemplate = (contact) => html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${contact.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id="${contact.id}">
                    <p>Phone number: ${contact.phoneNumber}</p>
                    <p>Email: ${contact.email}</p>
                </div>
            </div>
        </div>
`;

const rootEl = document.getElementById('contacts');


render(contacts.map(createTemplate),rootEl);


rootEl.addEventListener('click',(e)=>{

    if(e.target.classList.contains('detailsBtn')) {
        
        if(e.target.parentElement.getElementsByClassName('details')[0].style.display == 'block') {
            e.target.parentElement.getElementsByClassName('details')[0].style.display = 'none';
        } else {
            e.target.parentElement.getElementsByClassName('details')[0].style.display = 'block';

        }
    }
})