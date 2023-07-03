

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}


function hideAll() {
    const allPages = document.querySelectorAll('section').forEach(x => x.style.display = 'none');
}




export function createElement(info) {
const topicsDiv = document.querySelector('.topic-title');
    topicsDiv.replaceChildren();
    for(let result of Object.values(info)) {

    let element = document.createElement('div');
    element.dataset.id = result._id;
    let date = new Date();

    element.classList.add('topic-container');
    element.innerHTML = `
    <div class="topic-name-wrapper">
  <div class="topic-name">
    <a href="#" class="normal">
      <h2>${result.topicName}</h2>
    </a>
    <div class="columns">
      <div>
        <p>Date: <time>${date.toDateString()}</time></p>
        <div class="nick-name">
          <p>Username: <span>${result.username}</span></p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

topicsDiv.appendChild(element);

    };
}


export function createThemeContent(resources) {

}



