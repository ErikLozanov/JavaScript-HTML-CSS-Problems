// console.log('hello!');

// setTimeout(()=> console.log('bye'),3000) ;

// console.log('hiii');


// -----------------------------------------------------

function execution(resolve,reject) {
    console.log('promise starting');

    setTimeout(()=>{
        resolve('hello there!');
    },2000);
    // setTimeout(()=>{
    //     reject('Simulated error');
    // },2000);

    console.log('promise ended');
}

const promise = new Promise(execution);
promise
.then(successcallBack)
.catch(failurecallBack)
.finally(()=> console.log('operation complete!'));

function successcallBack(data) {
    console.log('received data:', data);
}

function failurecallBack(error) {
    console.log('Encounted error', error.message);
}

