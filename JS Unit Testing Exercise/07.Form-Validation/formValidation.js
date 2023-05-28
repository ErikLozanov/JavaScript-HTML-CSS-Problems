function validate() {
    let submitBtn = document.getElementById('submit');
    let radioBtn = document.getElementById('company');

    submitBtn.addEventListener('click', validate);
    radioBtn.addEventListener('click', companyInfo);

    function validate(e) {
        let validCount = 0;
        e.preventDefault();
        let validWindow = document.getElementById('valid');
        let usernameInput = document.getElementById('username');
        let emailInput = document.getElementById('email');
        let passInput = document.getElementById('password');
        let confirmPassInput = document.getElementById('confirm-password');
        let validateEmailPattern = /\w+@[a-zA-Z]+\.[a-zA-Z]+/g;
        let validatePassPattern = /\w+/g;
        if((usernameInput.value).length <= 3 || (usernameInput.value).length >= 20) {
            usernameInput.style.borderColor = 'red';
        } else {

            usernameInput.style.borderColor = "";
            validCount++;
        }
        if(!validateEmailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = "";
            validCount++;
        }
        if(passInput.value !== confirmPassInput.value) {
            passInput.style.borderColor = 'red';
            confirmPassInput.style.borderColor = 'red';
        } else {
            if((passInput.value).length <= 5 || (passInput.value).length >= 15 && !validatePassPattern.test(passInput)) {
                passInput.style.borderColor = 'red';
                confirmPassInput.style.borderColor = 'red';
            } else {
                passInput.style.borderColor = "";
                confirmPassInput.borderColor = "";
                validCount+=2;
            }
        }
        if(radioBtn.checked){ 
            let companyNumber = document.getElementById('companyNumber');
            if(companyNumber.value <= 1000 && companyNumber.value >= 9999) {
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.borderColor = "";
                validCount++;
            }
            if(validCount == 5) {
                validWindow.style.display = ' block';
            }
        } else {
            if(validCount == 4) {
                validWindow.style.display = ' block';
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
