function getArticleGenerator(articles) {
    let counter = 0;

    function showNext(){
        if(!articles[counter]) {
            return;
        }
    let content = document.getElementById('content');
    let articleCreate = document.createElement('article');
    articleCreate.textContent = articles[counter];
    content.appendChild(articleCreate);
    counter++;
    }
    return showNext;
}
