function toggle() {
    let moreBtnElement = document.querySelector('.head .button');
    let moreBtnElementText = moreBtnElement.textContent;
    if(moreBtnElementText === 'More') {
        let extraTextElement = document.getElementById('extra');
        extraTextElement.style.display ='block';
        moreBtnElement.textContent = 'Less'
    }
    if(moreBtnElementText === 'Less') {
        let extraTextElement = document.getElementById('extra');
        extraTextElement.style.display ='none';
        moreBtnElement.textContent = 'More'
    }
}