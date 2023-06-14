window.addEventListener('load', solve);

function solve() {

    let productTypeEl = document.getElementById('type-product');
    let descriptionTypeEl = document.getElementById('description');
    let clientNameEl = document.getElementById('client-name');
    let clientPhoneEl = document.getElementById('client-phone');

    let sendBtn = document.querySelector('button');
    
    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let productType = productTypeEl.value;
        let descriptionType = descriptionTypeEl.value;
        let clientName = clientNameEl.value;
        let clientPhone = clientPhoneEl.value;

        if(descriptionType == '' || clientName == '' || clientPhone == '') {
            return
        }
        
        let div = document.createElement('div');
        div.classList.add('container');
        let h2ProductType = document.createElement('h2');
        h2ProductType.textContent = `Product type for repair: ${productType}`;
        let h3ClientInformation = document.createElement('h3');
        h3ClientInformation.textContent = `Client information: ${clientName}, ${clientPhone}`;
        let h4Description = document.createElement('h4');
        h4Description.textContent = `Description of the problem: ${descriptionType}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;
    })
}