function solve() {
    let addButtonElement = document.getElementById('add');
    addButtonElement.type = 'button';
    addButtonElement.addEventListener('click', check);
    
    
    function check() {
    let openDivSection = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)')
        let taskElement = document.getElementById('task').value;
        let descriptionElement = document.getElementById('description').value;
        let dueDateElement = document.getElementById('date').value;

        if(taskElement.length <= 0 || descriptionElement.length <= 0 || dueDateElement.length <= 0) {
            return;
        }
        let createArticle = document.createElement('article');
        let h3Create = document.createElement('h3');
        h3Create.textContent = taskElement;
        let p1Create = document.createElement('p');
        p1Create.textContent = `Description: ${descriptionElement}`;
        let p2Create = document.createElement('p');
        p2Create.textContent = `Due Date: ${dueDateElement}`;
        let divCreate = document.createElement('div');
        divCreate.classList.add('flex');
        let button1Create = document.createElement('button');
        button1Create.textContent = 'Start';
        button1Create.classList.add('green');
        let button2Create = document.createElement('button');
        button2Create.textContent = 'Delete';
        button2Create.classList.add('red');
        divCreate.appendChild(button1Create);
        divCreate.appendChild(button2Create);
        createArticle.appendChild(h3Create);
        createArticle.appendChild(p1Create);
        createArticle.appendChild(p2Create);
        createArticle.appendChild(divCreate);
        openDivSection.appendChild(createArticle);


        button1Create.addEventListener('click', start);
        button2Create.addEventListener('click', del);     
    }

    function start(e) {
        let inProgressSection = document.querySelector('section:nth-of-type(3) div:nth-of-type(2)');
        let currArticle = e.currentTarget.parentElement.parentElement;
        inProgressSection.appendChild(currArticle);   
        let leftBtn = currArticle.querySelector('div button:nth-of-type(1)');
        let rightBtn = currArticle.querySelector('div button:nth-of-type(2)');
        leftBtn.remove();
        rightBtn.remove();
        let button1Delete = document.createElement('button');
        let button2Finish = document.createElement('button');
        button1Delete.classList.add('red');
        button1Delete.textContent = 'Delete';
        button2Finish.classList.add('orange');
        button2Finish.textContent = 'Finish';
        let div = currArticle.querySelector('div');
        div.appendChild(button1Delete);
        div.appendChild(button2Finish);

        button1Delete.addEventListener('click', del);
        button2Finish.addEventListener('click', finish);
    }

    
    function del(e) {
        e.currentTarget.parentElement.parentElement.remove();
    }


    function finish(e) {
        let currArticle = e.currentTarget.parentElement.parentElement;
        let completeSection = document.querySelector('section:nth-of-type(4) div:nth-of-type(2)');
        completeSection.appendChild(currArticle);
        currArticle.querySelector('div').remove();
    }
}