function solve() {
    let movieListElement = document.getElementById('movies-list');
    let inputElement = document.getElementById('input');
    let buttonElement = document.getElementById('add');
    let header = document.getElementsByTagName('h1')[0];
    buttonElement.disabled = true;
    let movieCounter = 0;
    let addedMoviesElement = document.querySelector('p span');
    let testChild = document.createElement('h2');
    header.appendChild(testChild);
    inputElement.addEventListener('focus', () => {
        buttonElement.disabled = false;

    })

    buttonElement.addEventListener('click', () => {
        if(inputElement.value === '') {
            return;
        }
        let movieAddedLi = document.createElement('li');
        movieAddedLi.textContent = inputElement.value;
        inputElement.value = '';
        movieListElement.appendChild(movieAddedLi);
        movieCounter++;
        addedMoviesElement.textContent = movieCounter;
    })
    movieListElement.addEventListener('click', function (el) {
        el.target.remove();
        movieCounter--;
        addedMoviesElement.textContent = movieCounter;
    })
}