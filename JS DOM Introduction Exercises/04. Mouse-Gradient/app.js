function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', function(e){
        let result = Math.floor((e.offsetX / gradientElement.offsetWidth) * 100);
        resultElement.textContent = `${(result)}%`;
    })
    gradientElement.addEventListener('mouseout',function (event) {
        resultElement.textContent = "";
    })
}