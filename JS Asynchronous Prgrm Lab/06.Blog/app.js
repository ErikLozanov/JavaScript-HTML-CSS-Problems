function attachEvents() {

    let selectPostsEl = document.getElementById('posts');
    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');
    loadPostsBtn.addEventListener('click',async ()=>{
        let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
        let postResponse = await fetch(postsUrl);
        let postsData = await postResponse.json();
        selectPostsEl.innerHTML = '';
        for(let post of Object.values(postsData)) {
            // console.log(post);
            let option = elFactory('option',post.id, post.title);
            selectPostsEl.appendChild(option);
        }
    });

    viewBtn.addEventListener('click', async()=>{
        let url = `http://localhost:3030/jsonstore/blog/posts/${selectPostsEl.value}`;

        let responseUrl = await fetch(url);
        let dataUrl = await responseUrl.json();
        // console.log(dataUrl.body);
        postTitle.textContent = selectPostsEl.options[selectPostsEl.selectedIndex].text;
        postBody.textContent = dataUrl.body;
        let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

        // debugger
        let response = await fetch(commentsUrl);
        let data = await response.json();
        console.log(selectPostsEl.value);
        console.log(data);
        postComments.innerHTML = '';
       for(let info of Object.values(data)) {
        if(info.postId == selectPostsEl.value) {
            let li = document.createElement('li');
            li.textContent = info.text;
            postComments.appendChild(li);
        }
       }
    })

}
function elFactory(type, value, text) {
    const el = document.createElement(type)
  
    if(text) {
        el.textContent = text;
    }
    if(value) {
        el.value = value;
    }
  
    return el
  }
attachEvents();