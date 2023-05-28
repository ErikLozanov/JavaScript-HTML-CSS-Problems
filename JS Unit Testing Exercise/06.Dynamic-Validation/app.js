function validate() {
   let inputElement = document.getElementById('email');

   inputElement.addEventListener('change', validation);

   function validation(e) {
   let inputText = e.currentTarget.value;
   let validatePattern = /\w+@[a-zA-Z]+\.[a-zA-Z]+/g;

   if(validatePattern.test(inputText)) {
    e.currentTarget.classList.remove('error');
    return;
   }
   e.currentTarget.classList.add('error');
   return;
}
}