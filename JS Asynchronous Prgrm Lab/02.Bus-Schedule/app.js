function solve() {
    let infoEl = document.querySelector('#info .info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let stopId = {
        next: 'depot',
    };
    
    async function depart() {
        
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;

        let response = await fetch(url);

        stopId = await response.json();

        // console.log(stopId);
        infoEl.textContent = `Next stop ${stopId.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        infoEl.textContent = `Arriving at ${stopId.name}`;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();