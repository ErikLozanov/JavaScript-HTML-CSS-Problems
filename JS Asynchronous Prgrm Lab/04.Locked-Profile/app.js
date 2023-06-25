async function lockedProfile() {
    
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let response = await fetch(url);
    let data = await response.json();

    let mainEl = document.getElementById('main');



    let counter = 0;
    for(let info of Object.values(data)) {
        console.log(info);
        counter++;

        let divProfile = elFactory('div','profile');
        let img = elFactory('img','userIcon');
        img.src = './iconProfile2.png';
        let labelLock = elFactory('label',undefined,'Lock');
        let radioLock = document.createElement('input');
        radioLock.type = 'radio';
        radioLock.name = `user${counter}Locked`;
        radioLock.value = 'lock';
        radioLock.checked = true;
        let labelUnlock = elFactory('label',undefined,'Unlock');
        let radioUnlock = document.createElement('input');
        radioUnlock.type = 'radio';
        radioUnlock.name = `user${counter}Locked`;
        radioUnlock.value = 'unlock';
        radioUnlock.checked = false;
        let usernameLabel = elFactory('label',undefined,'Username');
        let inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${counter}Username`;
        inputUsername.value = info.username;
        inputUsername.disabled = true;


        let hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.id = `user${counter}HiddenFields`;
        let hr = elFactory('hr');
        let hr2 = elFactory('hr');
        let emailLabel = elFactory('label',undefined,'Email:');
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${counter}Email`;
        emailInput.value = info.email;
        emailInput.disabled = true;
        let ageLabel = elFactory('label',undefined,'Age:');
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${counter}Age`;
        ageInput.value = info.age;
        ageInput.disabled = true;
        let showMoreBtn = elFactory('button',undefined,'Show more');

        hiddenFieldsDiv.appendChild(hr);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailInput);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageInput);
        hiddenFieldsDiv.style.display = 'none';

        divProfile.appendChild(img);
        divProfile.appendChild(labelLock);
        divProfile.appendChild(radioLock);
        divProfile.appendChild(labelUnlock);
        divProfile.appendChild(radioUnlock);
        divProfile.appendChild(hr2);
        divProfile.appendChild(usernameLabel);
        divProfile.appendChild(inputUsername);
        divProfile.appendChild(hiddenFieldsDiv);
        divProfile.appendChild(showMoreBtn);

        mainEl.appendChild(divProfile)

        showMoreBtn.addEventListener('click',(e)=>{
            
            let currentDivProfile = e.currentTarget.parentNode;
            let lockRadio = currentDivProfile.querySelector('input[value="lock"]');
            let unlockRadio = currentDivProfile.querySelector('input[value="unlock"]');
            console.log(lockRadio);
            console.log(unlockRadio);

            if(unlockRadio.checked) {

               
               if(showMoreBtn.textContent == 'Show more') {
                hiddenFieldsDiv.style.display = 'block';
                showMoreBtn.textContent = 'Hide it';
            } else {
                hiddenFieldsDiv.style.display = 'none';
                showMoreBtn.textContent = 'Show more';

            }

            }
        })
    }
}


function elFactory(type, clas, text) {
    const el = document.createElement(type)
  
    if(text) {
        el.textContent = text;
    }
    if(clas) {
        el.classList.add(clas);
    }
  
    return el
  }

