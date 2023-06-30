
export function getYearMonth(currYear) {


    const years = {
        '2020' : 'year-2020',
        '2021' : 'year-2021',
        '2022' : 'year-2022',
        '2023' : 'year-2023',
    }
    let months = {
        'Jan' : `month-${currYear}-1`,
        'Feb' : `month-${currYear}-2`,
        'Mar' : `month-${currYear}-3`,
        'Apr' : `month-${currYear}-4`,
        'May' : `month-${currYear}-5`,
        'Jun' : `month-${currYear}-6`,
        'Jul' : `month-${currYear}-7`,
        'Aug' : `month-${currYear}-8`,
        'Sept' : `month-${currYear}-9`,
        'Oct' : `month-${currYear}-10`,
        'Nov' : `month-${currYear}-11`,
        'Dec' : `month-${currYear}-12`,
    }

    document.querySelector('.calendar').style.display = 'none';
    document.querySelector(`#${years[currYear]}`).style.display = 'block';
    document.querySelector(`#${years[currYear]}`).addEventListener('click',(e)=>{
        if(e.target.tagName == 'CAPTION') {
            document.querySelector('.calendar').style.display = 'grid';
            document.querySelector(`#${years[currYear]}`).style.display = 'none';
        }

        if(e.target.classList.contains('day')) {
            let selectedMonth = e.target.querySelector('.date').textContent;
            document.querySelector(`#${years[currYear]}`).style.display = 'none';
            document.querySelector(`#${months[selectedMonth]}`).style.display = 'block';
            document.querySelector(`#${months[selectedMonth]}`).addEventListener('click',(e)=>{

                if(e.target.tagName == 'CAPTION') {
                    document.querySelector(`#${years[currYear]}`).style.display = 'block';
                    document.querySelector(`#${months[selectedMonth]}`).style.display = 'none';
                }
            })
        }
    })

}