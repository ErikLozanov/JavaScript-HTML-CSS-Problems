import {html,render} from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');

const townsTemplate = (town) => html`
<ul>
    ${town.map(data => html`<li>${data}</li>`)}
</ul>    
`;

document.querySelector('.content').addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let towns = formData.get('towns').split(', ');
    console.log(towns);


    render(townsTemplate(towns),root);
})