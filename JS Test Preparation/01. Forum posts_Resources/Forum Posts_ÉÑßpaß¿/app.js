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
      postTitleEl == "" ||
      postCategoryEl == "" ||
      postContentEl == ""
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
    pContent.textContent = `Content ${postContent}`;

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
  });
}
