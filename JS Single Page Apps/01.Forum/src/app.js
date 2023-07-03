import {showHomePage} from './homeView.js';
import {topicRedirect } from './detailsView.js';
import { showView,createElement, } from './util.js';

const form = document.querySelector('form');
const homePage = document.querySelector('#homeView');
const allTopics = document.querySelector('.topic-title');
form.addEventListener('submit',createTopic);

async function loadAllTopics() {
    
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

    let result = await response.json();

    createElement(result);
}


async function createTopic(e) {
    e.preventDefault();
    if(e.submitter.textContent == 'Cancel') {
        form.reset();

    } else if(e.submitter.textContent == 'Post') {

        let formData = new FormData(form);

        const topicName = formData.get('topicName');
        const username = formData.get('username');
        const postText = formData.get('postText');
        const date = new Date().toLocaleDateString();
        try {

            if(topicName == '' || username == '' || postText == '') {
                throw new Error('All fields must be filled!')
            }

            const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({topicName,username,postText,date})
            })

            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message)
            }
        
            form.reset();
            await loadAllTopics();
        } catch (error) {
            alert(error);
        }
    

    }
}

allTopics.addEventListener('click', topicRedirect);


// Application Start
showView(homePage);
loadAllTopics();