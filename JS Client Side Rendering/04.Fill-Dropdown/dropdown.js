import {html,render} from '../../node_modules/lit-html/lit-html.js';


addItem();
async function addItem() {
    loadAllTowns();
    
    document.querySelector('form').addEventListener('submit',async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const text = formData.get('text');
        
        try {
            
            if(text == '') {
                throw new Error("Please fill in the input!");
            }
            
            const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({text})
            })
            
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }
            e.target.reset();
            loadAllTowns();
        }catch(err) {
            alert(err.message);
            throw err;
        }
    })
    async function loadAllTowns() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const result = await response.json();
    const data = Object.values(result)
    const root = document.getElementById('menu');
    console.log(data);
    const townTemplate = (town) => html`<option value="${town._id}">${town.text}</option>`;
    render(data.map(townTemplate),root);
}  
}