window.addEventListener('load', solve);

function solve() {
    
    let genreEl = document.getElementById('genre');
    let nameOfSongEl = document.getElementById('name');
    let authorEl = document.getElementById('author');
    let dateEl = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');
    addBtn.type = 'button';

    addBtn.addEventListener('click',()=>{
        let genre = genreEl.value;
        let nameOfSong = nameOfSongEl.value;
        let author = authorEl.value;
        let date = dateEl.value;

        if(genre == '' || nameOfSong == '' || author == '' || date == '') {
            return;
        }
        
        let allHitsDiv = document.querySelector('.all-hits-container');

        let hitsInfoDiv = document.createElement('div');
        hitsInfoDiv.classList.add('hits-info');
        let img = document.createElement('img');
        img.src = './static/img/img.png';
        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre}`;
        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameOfSong}`;
        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;
        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';


        hitsInfoDiv.appendChild(img);
        hitsInfoDiv.appendChild(h2Genre);
        hitsInfoDiv.appendChild(h2Name);
        hitsInfoDiv.appendChild(h2Author);
        hitsInfoDiv.appendChild(h3Date);
        hitsInfoDiv.appendChild(saveBtn);
        hitsInfoDiv.appendChild(likeBtn);
        hitsInfoDiv.appendChild(deleteBtn);

        allHitsDiv.appendChild(hitsInfoDiv);

        genreEl.value = '';
        nameOfSongEl.value = '';
        authorEl.value = '';
        dateEl.value = '';


        likeBtn.addEventListener('click',()=>{

            let likesCounter = document.querySelector('.likes p');
            likesCounter.textContent = `Total Likes: ${+1}`;

            likeBtn.disabled = true;
        })
        saveBtn.addEventListener('click',()=>{
            let savedDiv = document.querySelector('.saved-container');
            savedDiv.appendChild(hitsInfoDiv);

            hitsInfoDiv.querySelector('button').remove();
            hitsInfoDiv.querySelector('button').remove();
            hitsInfoDiv.querySelector('button').remove();

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');

            hitsInfoDiv.appendChild(deleteBtn);
        })
    })
}