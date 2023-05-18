function focused() {
  let divElement = document.querySelector('body div');
  divElement.addEventListener('focusin',function(e){
    if(e.target.nodeName !== 'INPUT') {
        return;
    }
    e.target.parentElement.classList.add('focused');
  })
  divElement.addEventListener('focusout',function(e){
    if(e.target.nodeName !== 'INPUT') {
        return;
    }
    e.target.parentElement.classList.remove('focused');
  })
}
