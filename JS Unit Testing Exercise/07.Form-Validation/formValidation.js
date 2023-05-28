function validate() {
    let submitBtn = document.getElementById('submit');
    let radioBtn = document.getElementById('company');

    submitBtn.addEventListener('click', validate);
    radioBtn.addEventListener('click', companyInfo);

    function validate(e) {
        let validCount = [];
        e.preventDefault();
        let validWindow = document.getElementById('valid');
        let usernameInput = document.getElementById('username');
        let emailInput = document.getElementById('email');
        let passInput = document.getElementById('password');
        let confirmPassInput = document.getElementById('confirm-password');
        let validateEmailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let validatePassPattern = /^[\w]{5,15}$/;
        let validateUsernamePattern = /^[A-Za-z0-9]{3,20}$/;;

        if(validateUsernamePattern.test(usernameInput.value)) {        
            usernameInput.style.borderColor = "";
            validCount.push(true);
        } else {
            usernameInput.style.borderColor = 'red';
            validCount.push(false);

        }   

        if(validateEmailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = "";
            validCount.push(true)
        } else {
            emailInput.style.borderColor = 'red';
            validCount.push(false);

        }

        if(passInput.value !== confirmPassInput.value) {
            passInput.style.borderColor = 'red';
            confirmPassInput.style.borderColor  = 'red';
            validCount.push(false);

        } else {    
            if(validatePassPattern.test(passInput.value)) {
                passInput.style.borderColor = "";
                confirmPassInput.style.borderColor = "";
                            validCount.push(true);

            } else {
                passInput.style.borderColor = 'red';
                confirmPassInput.style.borderColor  = 'red';
            validCount.push(false);

            }   
        }
        if(radioBtn.checked){ 
            let companyNumber = document.getElementById('companyNumber');
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.borderColor = "";
                validCount.push(true)
            } else {
                companyNumber.style.borderColor = 'red';
                validCount.push(false);
            }
            if(validCount.includes(false)) {
                validWindow.style.display = 'none';
            } else {
                validWindow.style.display = 'block';
    
            }
        } else {
            if(validCount.includes(false)) {
                validWindow.style.display = 'none';
            } else {
                validWindow.style.display = 'block';
    
            }
        }

    }

    function companyInfo(e) {
        let companyInfoEl = document.getElementById('companyInfo');
        if(e.currentTarget.checked) {
            companyInfoEl.style.display ='block';
        } else {
            companyInfoEl.style.display ='none';
        }
    }
}