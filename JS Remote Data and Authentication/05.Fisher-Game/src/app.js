let logged = localStorage.getItem('userData');
let userData = JSON.parse(logged);
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
// Update catch...

    async function updateInfo(e) {
        let id = e.target.dataset.id;
        let currCatch = e.currentTarget.parentElement;

        let angler = currCatch.querySelector('.angler')
        let weight = currCatch.querySelector('.weight')
        let species = currCatch.querySelector('.species')
        let location = currCatch.querySelector('.location')
        let bait = currCatch.querySelector('.bait')
        let captureTime = currCatch.querySelector('.captureTime')
        // console.log(captureTime.value);

        try {
            let url = `http://localhost:3030/data/catches/${id}`;
        let body = {
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value,
        }

        if(Object.values(body).some(x=> x == '')) {
            throw new Error('Please fill in all inputs!');
        }
        let settings = {
            method: 'put',
            headers: {'Content-Type': 'application/json',
                      'X-Authorization': userData.token},
            body: JSON.stringify(body)
        }
        // console.log(settings.body);
        let response = await fetch(url,settings);
        if(!response.ok) {
            let error = response.json();
            throw new Error(error.message);
        }
        } catch (error) {
            alert(error);
        }
        

    }

    async function addCatch(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let url = 'http://localhost:3030/data/catches';
        
        let body = Object.fromEntries(formData);

        try {
            let data = {
                angler: body.angler,
                weight: Number(body.weight),
                species: body.species,
                location: body.location,
                bait: body.bait,
                captureTime: Number(body.captureTime),
            }
            let settings = {
                method: 'post',
                headers: {'Content-Type': 'application/json',
                          'X-Authorization': userData.token},
                body: JSON.stringify(data)
            }
    
            let response = await fetch(url,settings);
            console.log(Object.values(data));
            if(Object.values(data).some(x=> x === '' || x === 0)) {
                throw new Error('Please fill in all input fields.')
            }
            if(!response.ok) {
                let error = response.json();
                throw new Error(error.message);
            }
            let result = await response.json();
    
            console.log(result);
        } catch (error) {
            alert(error);
        }
        loadAllCatches();
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
        updateBtn.dataset.id = x._id;
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = x._id;

        updateBtn.disabled = isDisabled
        deleteBtn.disabled = isDisabled

        if(!updateBtn.disabled) {
            updateBtn.addEventListener('click',updateInfo);
        }

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