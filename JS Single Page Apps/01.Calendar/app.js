import { getYearMonth } from "./years.js";


const monthCalendar = document.querySelectorAll('.monthCalendar');

monthCalendar.forEach(x=> x.style.display = 'none');

const dayCalendar = document.querySelectorAll('.daysCalendar');
dayCalendar.forEach(x=> x.style.display = 'none');

let yearsTbody = document.querySelector('.calendar tbody');

yearsTbody.addEventListener('click',(e)=>{
    let currYear = e.target.querySelector('.date').textContent;

    if(e.target.classList.contains('day')) {
        getYearMonth(currYear);
    }
})

