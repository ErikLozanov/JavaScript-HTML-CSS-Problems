function validate() {
    let inputElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    inputElement.addEventListener('change', function (e) {
        if(!pattern.test(inputElement.value)) {
            inputElement.classList.add('error');
        } else {
            inputElement.classList.remove('error');
        }
    })
}