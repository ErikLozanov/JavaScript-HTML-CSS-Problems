function attachEvents() {
    
    let sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click',sendMessage)
    
    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refreshFunc);


    async function sendMessage() {
        let author = document.querySelector('input[name="author"]');
        let msg = document.querySelector('input[name="content"]');

        let url = 'http://localhost:3030/jsonstore/messenger';

        let data = {
            author: author.value,
            content: msg.value
        }

        let settings = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }
        let response = await fetch(url,settings);

        author.value = '';
        msg.value = '';

      await refreshFunc();
    }

    async function refreshFunc() {
        let url = 'http://localhost:3030/jsonstore/messenger';
        let resultArr = [];
        let response = await fetch(url);

        let result = await response.json();

        console.log(result);

        let messagesTextArea = document.getElementById('messages');

        Object.values(result).forEach(x=> resultArr.push(`${x.author}: ${x.content}`));

        messagesTextArea.textContent = resultArr.join('\n');
    }
}

attachEvents();