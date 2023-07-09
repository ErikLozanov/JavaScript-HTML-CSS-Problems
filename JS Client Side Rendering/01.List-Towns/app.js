import {html,render} from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');

const townsTemplate = (town) => html`<li>${town}</li>`;

document.querySelector('.content').addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let towns = formData.get('towns').split(', ');
    console.log(towns);

    const ul = document.createElement('ul');

    render(towns.map(townsTemplate),ul);
    root.appendChild(ul);
})