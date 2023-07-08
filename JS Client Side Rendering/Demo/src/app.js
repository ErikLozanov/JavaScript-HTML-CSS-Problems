import { data } from "./data.js";
import { getTemplate } from "./templating.js";

start();
async function start() {
    const main = document.querySelector('main');


    for(let user of data) {

        const html = await getTemplate('user-block');

        main.innerHTML += html;



        // const element = document.createElement('article');
        // element.className = 'user-block';
        // const nameSpan = document.createElement('span');
        // nameSpan.textContent = `Username: ${user.name}`;
        // element.appendChild(nameSpan);
        // const phoneSpan = document.createElement('span');
        // phoneSpan.textContent = `Phone Number: ${user.phone}`;
        // element.appendChild(phoneSpan);

        // main.appendChild(element);
    }
}