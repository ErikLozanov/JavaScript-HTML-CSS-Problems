import {html, render} from "../../../node_modules/lit-html/lit-html.js";
import { data } from "./data.js";
import { getTemplate } from "./templating.js";


const greetingTemplate = (user) => html`
<article class="user-block" data-id="12345" >
  <span>Username: ${user.name}</span>
  <span>Phone Number: ${user.phone}</span>
  <input type="number" .value=${user.age}>
  <button ?disabled=${user.age <= 18} @click=${() => callMe(user)} >Call</button>
  ${user.age <= 18 ? html`<span>${user.name} is too young to use phone!</span>` : html`<span>${user.name} is old enough to use phone!</span>`}
</article>
`;

const head = document.querySelector('header');

const helloTemplate = (name) => html`<h1>Hello ${name}!</h1>`;
start();

document.querySelector('button').addEventListener('click',()=>{
    render(helloTemplate('Patrick'),head);

});



async function start() {
    const main = document.querySelector('main');
    
    render(helloTemplate('Guest'),head);
render(data.map(greetingTemplate), main);
}

function callMe(user) {
    alert(`Calling ${user.name}`)
}