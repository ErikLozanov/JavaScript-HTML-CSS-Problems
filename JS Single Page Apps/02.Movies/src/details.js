import { showView, spinner } from "./util.js";
import { homePage } from "./home.js";

const detailsSection = document.querySelector("#movie-example");
const editSection = document.querySelector('#edit-movie');
export function detailsPage(id) {
  showView(detailsSection);
  displayMovie(id);
}

async function displayMovie(id) {
  const user = JSON.parse(localStorage.getItem("user"));

  detailsSection.replaceChildren(spinner());

  const [movie, likes, ownLike] = await Promise.all([
    getMovie(id),
    getLikes(id),
    getOwnLike(id, user),
  ]);

  detailsSection.replaceChildren(createMovieCard(movie, user, likes, ownLike));
}

function createMovieCard(movie, user, likes, ownLike) {
  const element = document.createElement("div");
  element.className = "container";
  element.innerHTML = `
              <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img class="img-thumbnail" src="${movie.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>${movie.description}</p>
                ${createControls(movie, user, likes, ownLike)}
            </div>
          </div>
        </div>
    `;

    const isOwner = user && user._id == movie._ownerId;


    if(isOwner) {
      // console.log(element);
      // console.log(delBtn);
      element.addEventListener('click',(e) => delOrEdit(e,user,movie._id));
    }
    const likeBtn = element.querySelector('.btn.btn-primary');



    if(likeBtn) {
        likeBtn.addEventListener('click',(e) => likeMovie(e, movie._id));
    }
  return element;
}

async function delOrEdit(e,user,movieId) {

  if(e.target.tagName == 'A' && e.target.id == 'delBtn') {

  let response = await fetch(`http://localhost:3030/data/movies/${movieId}`,{
    method: 'DELETE',
    headers: {'X-Authorization': user.accessToken},
  })

  let result = await response.json();

  homePage();
} else if(e.target.tagName == 'A' && e.target.id == 'editBtn'){
  
  loadInputs(movieId);
}
}

async function loadInputs(movieId) {
  let response = await fetch(`http://localhost:3030/data/movies/${movieId}`);

  let result = await response.json();

  showView(editSection);

  editInputs(result);

}

function editInputs(result) {
  let form = document.getElementsByClassName('text-center border border-light p-5')[1];


  const titleEl = document.querySelectorAll('.form-group .form-control')[3];
  const descriptionEl = document.querySelectorAll('.form-group .form-control')[4];
  const imgEl = document.querySelectorAll('.form-group .form-control')[5];
  titleEl.value = result.title;
  descriptionEl.value = result.description;
  imgEl.value = result.img;

  form.addEventListener('submit',(e)=> changeInfo(e,result));

}

async function changeInfo(e,result) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));

  const formData = new FormData(e.currentTarget);
  const allDatas = Object.fromEntries(formData);

  let response = await fetch(`http://localhost:3030/data/movies/${result._id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': user.accessToken,
    },
    body: JSON.stringify({
      title: allDatas.title,
      description: allDatas.description,
      img: allDatas.img,
    })
  });
  let res = await response.json();

  console.log(res);
  detailsPage(result._id);
}

async function likeMovie(e,movieId) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    await fetch('http://localhost:3030/data/likes',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({
            movieId
        })
    });

    detailsPage(movieId);
}

function createControls(movie, user, likes, ownLike) {
  const isOwner = user && user._id == movie._ownerId;

  let controls = [];

  if (isOwner) {
    controls.push('<a class="btn btn-danger" id="delBtn" href="#">Delete</a>');
    controls.push('<a class="btn btn-warning" id="editBtn" href="#">Edit</a> ');


  } else if(user && ownLike == false){
    controls.push('<a class="btn btn-primary" href="#">Like</a>');
  }
  controls.push(`<span class="enrolled-span">Liked ${likes}</span>`);

  return controls.join('');
}

async function getMovie(id) {
  const res = await fetch(`http://localhost:3030/data/movies/${id}`);

  const movie = await res.json();

  return movie;
}

async function getLikes(id) {
  const res = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
  );

  const likes = await res.json();

  return likes;
}

async function getOwnLike(movieId, user) {
  if (!user) {
    return false;
  } else {
    const userId = user._id;

    const res = await fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
    );

    const like = await res.json();
    return like.length > 0;
  }
}









