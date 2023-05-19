function attachEventsListeners() {

    let mainElement = document.getElementsByTagName('main')[0];
    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    mainElement.addEventListener('click',function(e){

        if(e.target.value === 'Convert') {
            let inputNumber = e.target.parentElement.querySelector('input');
            if(inputNumber.id === 'days') {
                let calcHours = Number(inputNumber.value) * 24;
                let calcMinutes = calcHours * 60;
                let calcSeconds = calcMinutes * 60;
                hoursInputElement.value = calcHours;
                minutesInputElement.value = calcMinutes;
                secondsInputElement.value = calcSeconds;
            } else if(inputNumber.id ==='hours') {
                let calcDays = Number(inputNumber.value) / 24;
                let calcMinutes = inputNumber.value * 60;
                let calcSeconds = calcMinutes * 60;
                daysInputElement.value = Math.trunc(calcDays);
                minutesInputElement.value = Math.trunc(calcMinutes);
                secondsInputElement.value = Math.trunc(calcSeconds);
            } else if(inputNumber.id ==='minutes') {
                let calcHours = Number(inputNumber.value) / 60;
                let calcSeconds = Number(inputNumber.value) * 60;
                let calcDays = calcHours / 24;
                daysInputElement.value = Math.trunc(calcDays);
                hoursInputElement.value = Math.trunc(calcHours);
                secondsInputElement.value = Math.trunc(calcSeconds);
            } else if(inputNumber.id === 'seconds') {
                let calcMinutes = Number(inputNumber.value) / 60;
                let calcHours = calcMinutes / 60;
                let calcDays = calcHours / 24;
                daysInputElement.value = Math.trunc(calcDays);
                hoursInputElement.value = Math.trunc(calcHours);
                minutesInputElement.value = Math.trunc(calcMinutes);
            }
        }
    }) 
}