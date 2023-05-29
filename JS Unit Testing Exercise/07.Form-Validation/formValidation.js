function validate() {
    let submitBtn = document.getElementById('submit');
    submitBtn.type = "button";
    let radioBtn = document.getElementById('company');

    radioBtn.addEventListener('change', function(e) {
        let companyInfoEl = document.getElementById('companyInfo');
        if(radioBtn.checked) {
            companyInfoEl.style.display ='block';
        } else {
            companyInfoEl.style.display ='none';
        }
    });
    submitBtn.addEventListener('click', validate);

    function validate(e) {
        let validCount = [];
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

        if(passInput.value === confirmPassInput.value &&
            validatePassPattern.test(passInput.value) &&
            validatePassPattern.test(confirmPassInput.value)) {
                passInput.style.borderColor = "";
                confirmPassInput.style.borderColor = "";
                validCount.push(true);

        } else {    
            passInput.style.borderColor = 'red';
            confirmPassInput.style.borderColor  = 'red';
            validCount.push(false);

        }

        if(radioBtn.checked){ 
            let company = document.querySelector("#companyNumber");
            if (company.value < 1000 || company.value > 9999) {
              company.style.borderColor = "red";
              validCount.push(false);
            } else {
              company.style.borderColor = "";
              validCount.push(true);
            }
        }

            if(validCount.includes(false)) {
                validWindow.style.display = 'none';
            } else {
                validWindow.style.display = 'block';
            }  
    }
}




function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
      console.log(e.target);
      if (document.querySelector("#company").checked) {
        document.querySelector("#companyInfo").style.display = "block";
      } else {
        document.querySelector("#companyInfo").style.display = "none";
      }
    });
   
    document.querySelector("#submit").addEventListener("click", (e) => {
      let validOut = [];
      let userName = document.querySelector("#username");
      let email = document.querySelector("#email");
      let passWord = document.querySelector("#password");
      let confirmPass = document.querySelector("#confirm-password");
      let checkBox = document.querySelector("#company");
      let userTest = /^[A-Za-z0-9]{3,20}$/;
      let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
      let passTest = /^[\w]{5,15}$/;
   
      //console.log(checkBox.checked);
   
      if (!userTest.test(userName.value)) {
        userName.style.borderColor = "red";
        validOut.push(false);
      } else {
        userName.style.borderColor = "";
        validOut.push(true);
      }
   
      if (!emailTest.test(email.value)) {
        email.style.borderColor = "red";
        validOut.push(false);
      } else {
        email.style.borderColor = "";
        validOut.push(true);
      }
   
      if (
        passWord.value === confirmPass.value &&
        passTest.test(confirmPass.value) &&
        passTest.test(passWord.value)
      ) {
        confirmPass.style.borderColor = "";
        passWord.style.borderColor = "";
        validOut.push(true);
      } else {
        confirmPass.style.borderColor = "red";
        passWord.style.borderColor = "red";
        validOut.push(false);
      }
   
      if (checkBox.checked) {
        let company = document.querySelector("#companyNumber");
        if (company.value < 1000 || company.value > 9999) {
          company.style.borderColor = "red";
          validOut.push(false);
        } else {
          company.style.borderColor = "";
          validOut.push(true);
        }
      }
   
      if (!validOut.includes(false)) {
        document.querySelector("#valid").style.display = "block";
      } else {
        document.querySelector("#valid").style.display = "none";
      }
    });
  }