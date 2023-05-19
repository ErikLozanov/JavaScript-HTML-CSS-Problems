function lockedProfile() {
    
    let firstProfileElement = document.getElementsByClassName('profile');

    Array.from(firstProfileElement).forEach(x => x.addEventListener('click', lockChecker));

    function lockChecker(e) {
        let lockRadio = e.currentTarget.querySelector('input:nth-of-type(1)');
        let unlockRadio = e.currentTarget.querySelector('input:nth-of-type(2)');
        let hiddenElement = e.currentTarget.querySelector('div');
        let button = e.currentTarget.querySelector('button');

        if(unlockRadio.checked) {
            button.disabled = false;
        if(e.target.textContent === 'Show more') {
            hiddenElement.style.display ='block';
            button.textContent = 'Hide it'
        } else if(e.target.textContent === 'Hide it'){
            hiddenElement.style.display ='none';
            button.textContent = 'Show more'
        }
    } else if(lockRadio.checked && button.textContent === 'Hide it') {
        button.disabled = true;
    }
    }
}