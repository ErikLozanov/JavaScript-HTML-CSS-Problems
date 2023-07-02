import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const registerSection = document.querySelector('#form-sign-up');
const form = registerSection.querySelector('form');
form.addEventListener('submit',onSubmit);




export function registerPage() {
    showView(registerSection);
}


async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');  
    const rePass = formData.get('repeatPassword');

   await login(email,password,rePass);
    form.reset();
    updateNav();
    homePage();

}



async function login(email,password,rePass) {
    try {
        const res = await fetch('http://localhost:3030/users/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        if(!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }
        if(email == '') {
            throw new Error('The email must be filled!')
        }

        if(password !== rePass) {
            throw new Error('Passwords must match!');
        }

        if(password.length < 6) {
            throw new Error('Password should be at least 6 characters long!');
        }
        const user = await res.json();
        localStorage.setItem('user',JSON.stringify(user));
    } catch (err) {
        alert(err.message);
        throw err;
    }
}