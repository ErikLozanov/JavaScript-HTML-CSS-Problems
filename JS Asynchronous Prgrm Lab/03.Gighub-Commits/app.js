function loadCommits() {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsUl = document.getElementById('commits');
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
    .then(response =>{
        if(response.ok === false || response.status !== 200) {
          return  Promise.reject(`${response.status}: Not Found`);
        } else {
         return   response.json()

        }
    } )
    .then(data => {
        commitsUl.innerHTML = '';

        data.forEach(x=> {
            let li  = document.createElement('li');
            li.innerHTML = `<p>${x.commit.author.name}:${x.commit.message}`;
            commitsUl.appendChild(li);
        })
    })
    .catch(error => commitsUl.innerHTML = `<p>${error}</p>`)
}