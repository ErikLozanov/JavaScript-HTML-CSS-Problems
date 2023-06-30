
export function getYearMonth(currYear) {


    const years = {
        '2020' : 'year-2020',
        '2021' : 'year-2021',
        '2022' : 'year-2022',
        '2023' : 'year-2023',
    }

    document.querySelector('.calendar').style.display = 'none';
    document.querySelector(`#${years[currYear]}`).style.display = 'block';
    document.querySelector(`#${years[currYear]}`).addEventListener('click',(e)=>{
        if(e.target.tagName == 'CAPTION') {
            document.querySelector('.calendar').style.display = 'grid';
            document.querySelector(`#${years[currYear]}`).style.display = 'none';
        }
    })

}