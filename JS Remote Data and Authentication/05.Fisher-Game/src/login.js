    document.getElementById('user').style.display = 'none';

    let form = document.querySelector('form');

    form.addEventListener('submit', userLogin);

    async function userLogin(e) {
        e.preventDefault();
        let formData = new FormData(form);

        let url = 'http://localhost:3030/users/login';

        let email = formData.get('email');
        let password = formData.get('password');

        try {

            let settings = {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email,password})
            }
            let response = await fetch(url,settings)

            if(!response.ok) {
                
                const error = response.json();
                throw new Error('Invalid Username or Password.');
            }
            let data = await response.json();

            const userData = {
                email: data.email,
                id: data._id,
                token: data.accessToken
            }
            localStorage.setItem('userData', JSON.stringify(userData));

            window.location = './index.html'

        } catch (error) {
            document.querySelector('form').reset();
            alert(error);
        }
    }