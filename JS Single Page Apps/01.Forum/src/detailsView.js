import { showView,createThemeContent } from "./util.js";

const section = document.getElementById('detailsView');

export function topicRedirect(e) {
    e.preventDefault();
    let curDiv = e.target.parentElement.parentElement.parentElement.parentElement;
    
    if(curDiv.tagName === 'DIV' && curDiv.dataset.id !== undefined) {

        loadThemeContent(curDiv.dataset.id);
        showView(section);
    }
}


async function loadThemeContent (id) {

    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);

    let res = await response.json();

    createTheme(res)
}

async function createTheme (result) {
    section.replaceChildren();

    let createContent = document.createElement('div');
    createContent.classList.add('theme-content');
    createContent.dataset.id = result._id;
    let themeTitle = document.createElement('div');
    themeTitle.classList.add('theme-title');
    themeTitle.innerHTML = `
    <div class="theme-name-wrapper">
                <div class="theme-name">
                  <h2>${result.topicName}</h2>
                </div>
              </div>
              `;

              createContent.appendChild(themeTitle);

    let postComment = document.createElement('div');
    postComment.classList.add('comment');
    postComment.innerHTML = `
    <div class="header">
                <img src="./static/profile.png" alt="avatar">
                <p>
                  <span>${result.username}</span> posted on <time>${result.date}</time>
                </p>
                <p class="post-content">${result.postText}</p>
              </div>
    `;
        createContent.appendChild(postComment);

        section.appendChild(createContent);

        let writeComment = document.createElement('div');
        writeComment.classList.add('answer-comment');
        writeComment.innerHTML = `
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
        `;

        section.appendChild(writeComment);




        let form = document.querySelector('.answer form');
    form.addEventListener('submit',(e) => createComment(e,result._id));
    loadComments(result._id);
}

async function createComment(e,id) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let postText = formData.get('postText');
    let username = formData.get('username');
    const date = new Date();

    try {

        if(postText == '' || username == '') {
            throw new Error('Please fill in all inputs!');
        }

        let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${id}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({postText,username,date})
        });
    
        if(!response.ok) {
            const error = response.json();
            throw new Error(error.message);
        }

        let result = await response.json();
        document.querySelector('.answer form').reset();
        loadComments(id);

    } catch (error) {
        alert(error.message);
    }


}


async function loadComments(themeId) {
    
    const commentDiv = document.querySelector('.comment');
    commentDiv.querySelectorAll('.user-comment').forEach(x=> x.remove());

    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${themeId}`);
    let parentThemeDiv = commentDiv.parentElement;

    let result = await response.json();

    for(let info of Object.values(result)) {

        let comment = createCommentElement(info,themeId);
        if(parentThemeDiv.dataset.id == themeId) {
            commentDiv.appendChild(comment);
        }
    }
}


function createCommentElement(result,themeId) {
    let element = document.createElement('div');
    element.dataset.id = themeId;
    element.className = 'user-comment';
    element.innerHTML = `
    <div class="topic-name-wrapper">
    <div class="topic-name">
        <p><strong>${result.username}</strong> commented on <time>${result.date}</time></p>
        <div class="post-content">
            <p>${result.postText}</p>
        </div>
    </div>
</div>
    `;

    return element;
}



    // <div id="user-comment">

    // </div>