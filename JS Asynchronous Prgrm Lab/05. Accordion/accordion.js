
 async function solution() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(url);
    let data = await response.json();
    


    let mainEl = document.getElementById('main');

    for(let info of data) {
        
        let url2 = `http://localhost:3030/jsonstore/advanced/articles/details/${info._id}`;
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        console.log(data2);

        let accordDiv = elFactory('div', 'accordion');
        let headDiv = elFactory('div', 'head');
        let titleSpan = elFactory('span',undefined, info.title);
        let moreBtn = elFactory('button', 'button', 'More');
        moreBtn.id = info._id;
        let divExtra = elFactory('div', 'extra');
        let pExtra = elFactory('p',undefined,data2.content);

        divExtra.appendChild(pExtra);

        headDiv.appendChild(titleSpan);
        headDiv.appendChild(moreBtn);
        
        accordDiv.appendChild(headDiv);
        accordDiv.appendChild(divExtra);
        mainEl.appendChild(accordDiv);

        moreBtn.addEventListener('click',()=>{
            
            if(moreBtn.textContent == 'More') {
            divExtra.style.display = 'block';
            moreBtn.textContent = 'Less';
        } else {
            divExtra.style.display = 'none';
            moreBtn.textContent = 'More';
        }
        })
    }
}
function elFactory(type, clas, text) {
    const el = document.createElement(type)
  
    if(text) {
        el.textContent = text;
    }
    if(clas) {
        el.classList.add(clas);
    }
  
    return el
  }
solution();
