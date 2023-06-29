let logged = localStorage.getItem('userData');

if(logged) {
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.email span').textContent = JSON.parse(logged).email;
    document.querySelector('.add').disabled = false;

} else {
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementById('user').style.display = 'none';
}


// load data....
    document.querySelector('.load').addEventListener('click', loadAllCatches);
// Create catch.....
    document.querySelector('#addForm').addEventListener('submit', addCatch);


    async function addCatch(e) {
        e.preventDefault();

        if(!logged) {
            window.location = './login.html';
            return;
        }
    }

    async function loadAllCatches(e) {
        document.getElementById('catches').innerHTML = '';

        let url = 'http://localhost:3030/data/catches';

        let response = await fetch(url)

        let result = await response.json();

        result.forEach(x => {
            let divCatch = createCatch(x);

            document.getElementById('catches').appendChild(divCatch);
        })
    }


    function createCatch(x) {
        let divCatch = createElement('div','catch');
        let userData = JSON.parse(logged);
        // console.log(userData.id);
        let isDisabled = (userData && x._ownerId === userData.id) ? false : true;
        // console.log(isDisabled);
        let labelOne = createElement('label');
        labelOne.textContent = 'Angler';
        let inputOne = createElement('input','angler',x.angler);
        inputOne.disabled = isDisabled
        let labelTwo = createElement('label');
        labelTwo.textContent = 'Weight';
        let inputTwo = createElement('input','weight',x.weight);
        let labelThree = createElement('label');
        inputTwo.disabled = isDisabled
        labelThree.textContent = 'Species';
        let inputThree = createElement('input','species',x.species);
        inputThree.disabled = isDisabled
        let labelFour = createElement('label');
        labelFour.textContent = 'Location';
        let inputFour = createElement('input','location',x.location);
        inputFour.disabled = isDisabled
        let labelFive = createElement('label');
        labelFive.textContent = 'Bait';
        let inputFive = createElement('input','bait',x.bait);
        inputFive.disabled = isDisabled
        let labelSix = createElement('label');
        labelSix.textContent = 'Capture Time';
        let inputSix = createElement('input','captureTime',x.captureTime);
        inputSix.disabled = isDisabled;
        
        let updateBtn = document.createElement('button');
        updateBtn.classList.add('update');
        updateBtn.textContent = 'Update';
        updateBtn.dataset.id = x._ownerId;
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = x._ownerId;

        updateBtn.disabled = isDisabled
        deleteBtn.disabled = isDisabled


        divCatch.appendChild(labelOne);
        divCatch.appendChild(inputOne);
        divCatch.appendChild(labelTwo);
        divCatch.appendChild(inputTwo);
        divCatch.appendChild(labelThree);
        divCatch.appendChild(inputThree);
        divCatch.appendChild(labelFour);
        divCatch.appendChild(inputFour);
        divCatch.appendChild(labelFive);
        divCatch.appendChild(inputFive);
        divCatch.appendChild(labelSix);
        divCatch.appendChild(inputSix);
        divCatch.appendChild(updateBtn);
        divCatch.appendChild(deleteBtn);
        
        return divCatch;
    }


    function createElement(type, clas, value, inputType) {
        let element = document.createElement(type);

        if(clas) {
            element.classList.add(clas);
        }
        if(value) {
            element.value = value;
        }
        if(inputType) {
            element.type = inputType;
        }

        return element;
    }