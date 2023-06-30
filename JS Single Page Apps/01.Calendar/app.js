
const monthCalendar = document.querySelectorAll('.monthCalendar');

monthCalendar.forEach(x=> x.style.display = 'none');

const dayCalendar = document.querySelectorAll('.daysCalendar');
dayCalendar.forEach(x=> x.style.display = 'none');

let yearsTbody = document.querySelector('.calendar tbody');

yearsTbody.addEventListener('click',(e)=>{
    let currYear = e.target.querySelector('.date').textContent;

    if(e.target.classList.contains('day')) {
        console.log(currYear);
    }

    const years = {
        '2020' : 'year-2020',
        '2021' : 'year-2021',
        '2022' : 'year-2022',
        '2023' : 'year-2023',
    }

    document.querySelector('.calendar').style.display = 'none';
    document.querySelector(`#${years[currYear]}`).style.display = 'block';
})