function generateReport() {
    let result = [];
    let checks = Array.from(document.querySelectorAll('thead tr th input'));
    let trs = Array.from(document.querySelectorAll('tbody tr'));
    let output = document.getElementById('output');
    
    trs.forEach(row => {
        let obj = {};
        
        Array.from(row.querySelectorAll('td')).forEach((x,i) => {
            
            if(checks[i].checked) {
                obj[checks[i].name] = x.textContent;
            }
            
            console.log(obj);
        })
        result.push(obj);
    })
    output.value = JSON.stringify(result);
    
}