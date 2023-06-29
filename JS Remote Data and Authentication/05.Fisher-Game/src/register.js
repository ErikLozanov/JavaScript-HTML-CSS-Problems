let form = document.querySelector('form');
document.getElementById('user').style.display = 'none';

form.addEventListener('submit', registerFunc);

async function registerFunc(e) {
    e.preventDefault();
    let url = 'http://localhost:3030/users/register';
    let formData = new FormData(form);

    let {email,password,rePass} = Object.fromEntries(formData);

    try {
        if([...formData.values()].some(x=> x == '')) {
            throw new Error('Please fill all inputs.')
        }
        if(password !== rePass) {
            throw new Error('Passwords do not match!')
        }

        let settings = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password,rePass}),
        }
    
        let response = await fetch(url,settings);

        if(!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        let result = await response.json();

        const user = {
            email: result.email,
            id: result._id,
            token: result.accessToken,
        }
        localStorage.setItem('userData',JSON.stringify(user));
        window.location = './index.html';
        
    } catch (error) {
        document.querySelector('form').reset();
        alert(error.message);
    }
}