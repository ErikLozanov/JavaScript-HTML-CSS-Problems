window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish-btn");

  let postTitleEl = document.getElementById("post-title");
  let postCategoryEl = document.getElementById("post-category");
  let postContentEl = document.getElementById("post-content");

  publishBtn.addEventListener("click", () => {
    let postTitle = postTitleEl.value;
    let postCategory = postCategoryEl.value;
    let postContent = postContentEl.value;

    if (
      postTitle == "" ||
      postCategory == "" ||
      postContent == ""
    ) {
    return
    }
    
    let reviewUl = document.getElementById('review-list');

    let li = document.createElement('li');
    li.classList.add('rpost');
    let article = document.createElement('article');
    let h4Title = document.createElement('h4');
    h4Title.textContent = postTitle;
    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${postCategory}`
    let pContent = document.createElement('p');
    pContent.textContent = `Content: ${postContent}`;

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn','edit');
    editBtn.textContent = 'Edit';
    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn','approve');
    approveBtn.textContent = 'Approve';

    article.appendChild(h4Title);
    article.appendChild(pCategory);
    article.appendChild(pContent);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    reviewUl.appendChild(li);

    postTitleEl.value = '';
    postCategoryEl.value = '';
    postContentEl.value = '';


    editBtn.addEventListener('click',()=>{
      li.remove();

      postTitleEl.value = postTitle;
      postCategoryEl.value = postCategory;
      postContentEl.value = postContent;
    })
    
    let ulPublished = document.getElementById('published-list');
    approveBtn.addEventListener('click', ()=>{

      li.querySelector('button').remove();
      li.querySelector('button').remove();
      ulPublished.appendChild(li);
    })

    let clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click',()=>{
      for(let el of ulPublished.getElementsByTagName('li')) {
        el.remove();
      }
    })
  });


}
