function loadRepos() {
	
	let username = document.getElementById('username').value;
	let repos = document.getElementById('repos');
	let url = `https://api.github.com/users/${username}/repos`
	fetch(url)
	.then(response => {
		if(response.ok === false && response.status !== 200) {
		return	Promise.reject(`${response.status}: ${response.statusText}`)
		} else {
		return response.json();
	}
	})
	.then(data => {
		data.forEach(x=> {
			let li = document.createElement('li');
			li.innerHTML = `<a href="${x.html_url}">${x.full_name}</a>`;
			repos.appendChild(li);
		})
	})
	.catch(error => {repos.innerHTML = `<p>${error}</p>`});
}