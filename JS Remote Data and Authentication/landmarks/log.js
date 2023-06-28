let formEl = document.getElementById('login');

formEl.addEventListener('submit', loginFunc);

async function loginFunc(e) {
    e.preventDefault();
    let target = e.target;
    let form = new FormData(target);

    let data = {
        email: form.get('email'),
        password: form.get('password')
    }

    let url = 'http://localhost:3030/users/login';

    let settings = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    let response = await fetch(url,settings);
    let result = await response.json();

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('accessToken', result.accessToken);
}