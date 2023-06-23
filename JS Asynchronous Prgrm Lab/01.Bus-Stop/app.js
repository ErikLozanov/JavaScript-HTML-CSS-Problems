async function getInfo() {
    
    let stopId = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let busUl = document.getElementById('buses');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
    
    const res = await fetch(url);
    busUl.replaceChildren();

    if(res.status !== 200) {
        throw new Error('Invalid request.')
    }
    const data = await res.json();
    stopName.textContent = data.name;

    Object.entries(data.buses).forEach(x=> {
        let li = document.createElement('li');
        li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
        busUl.appendChild(li);
    })
} catch(error) {
    stopName.textContent = 'Error';
}
}



    // fetch(url)
    // .then(response => {
    //     if(response.status !== 200 || stopId == '') {
    //         return Promise.reject('Error');
    //     }
    //         return response.json();
    // })
    // .then(data => {
    //     busUl.innerHTML = '';
    //     stopName.textContent = 'Loading...';

    //     setTimeout(()=>{
    //         stopName.textContent = data.name;

    //         for(let el of Object.entries(data.buses)) {
    //             let li = document.createElement('li');
    //             li.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
    //             busUl.appendChild(li);
    //         }
    //     },2000)

    // })
    // .catch(error => stopName.textContent = error)