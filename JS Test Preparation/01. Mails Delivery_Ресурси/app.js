function solve() {
  let addBtn = document.getElementById("add");
  addBtn.type = "button";
  let recipientEl = document.getElementById("recipientName");
  let titleEl = document.getElementById("title");
  let messageEl = document.getElementById("message");

  addBtn.addEventListener("click", () => {
    let recipient = recipientEl.value;
    let title = titleEl.value;
    let message = messageEl.value;

    if (recipient == "" || title == "" || message == "") {
      return;
    }
    
    let ulMailsEl = document.getElementById('list');

    let li = document.createElement('li');
    let h4Title = document.createElement('h4');
    h4Title.textContent = `Title: ${title}`;
    let h4RecipentName = document.createElement('h4');
    h4RecipentName.textContent = `Recipient Name: ${recipient}`;
    let spanMessage = document.createElement('span');
    spanMessage.textContent = message;
    
    let div = document.createElement('div');
    div.id = 'list-action';
    let sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    sendBtn.type = 'submit';
    sendBtn.id = 'send';
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'submit';
    deleteBtn.id = 'delete';
    deleteBtn.textContent = 'Delete';
    div.appendChild(sendBtn);
    div.appendChild(deleteBtn);

    li.appendChild(h4Title);
    li.appendChild(h4RecipentName);
    li.appendChild(spanMessage);
    li.appendChild(div);

    ulMailsEl.appendChild(li);


    recipientEl.value = '';
    titleEl.value = '';
    messageEl.value = '';


    let sentUl = document.querySelector('.sent-list');
    sendBtn.addEventListener('click',()=>{

        li.remove();
        

        let liSentMails = document.createElement('li');
        let spanTo = document.createElement('span');
        spanTo.textContent = `To: ${recipient}`;
        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${title}`;
        let divBtn = document.createElement('div');
        divBtn.classList.add('btn');
        let delBtn = document.createElement('button');
        delBtn.type = 'submit';
        delBtn.classList.add('delete');
        delBtn.textContent = 'Delete';
        divBtn.appendChild(delBtn);

        liSentMails.appendChild(spanTo);
        liSentMails.appendChild(spanTitle);
        liSentMails.appendChild(divBtn);

        sentUl.appendChild(liSentMails);

        delBtn.addEventListener('click',()=>{

            liSentMails.remove();
    
            let liDel = document.createElement('li');
            let toSpan = document.createElement('span');
            toSpan.textContent = `To: ${recipient}`;
            let toTitle = document.createElement('span');
            toTitle.textContent = `Title: ${title}`;
            liDel.appendChild(toSpan);
            liDel.appendChild(toTitle);
    
            deletedMailsUl.appendChild(liDel);
        })
    })
    let deletedMailsUl = document.querySelector('.delete-list')
    deleteBtn.addEventListener('click',()=>{

        li.remove();

        let liDel = document.createElement('li');
        let toSpan = document.createElement('span');
        toSpan.textContent = `To: ${recipient}`;
        let toTitle = document.createElement('span');
        toTitle.textContent = `Title: ${title}`;
        liDel.appendChild(toSpan);
        liDel.appendChild(toTitle);

        deletedMailsUl.appendChild(liDel);
    })

  });

  let resetBtn = document.getElementById('reset');
  resetBtn.type = 'button';
  resetBtn.addEventListener('click',()=>{
    recipientEl.value = '';
    titleEl.value = '';
    messageEl.value = '';
  })
}
solve();
