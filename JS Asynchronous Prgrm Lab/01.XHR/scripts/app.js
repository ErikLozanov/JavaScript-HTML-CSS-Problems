function loadRepos() {

   let url = 'https://api.github.com/users/testnakov/repos';
   const extraction = document.getElementById('res');

   // fetch(url)
   // .then(response => response.json())
   // .then(data => extraction.textContent = data);

   const request = fetch(url);

   request.then(requestHandler);

   function requestHandler(response) {
      console.log('received headers');
      const dataPromise = response.json();
      dataPromise.then(dataHandler);
   }

   function dataHandler(data) {
      console.log('received data');
      extraction.textContent = JSON.stringify(data);
   }
}


// function loadRepos() {
   
//    const extraction = document.getElementById('res');

//    let url = 'https://api.github.com/users/testnakov/repos';
//    const httpRequest = new XMLHttpRequest();
//    httpRequest.addEventListener('readystatechange', ()=>{
//       if(httpRequest.readyState == 4 && httpRequest.status == 200) {
//          extraction.textContent = httpRequest.responseText;
//       }
//    });
//    httpRequest.open("GET", url);
//    httpRequest.send();
// }
