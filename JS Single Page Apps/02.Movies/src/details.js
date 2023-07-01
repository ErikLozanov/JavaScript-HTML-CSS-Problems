import { showView, spinner } from "./util.js";

const detailsSection = document.querySelector("#movie-example");

export function detailsPage(id) {
  showView(detailsSection);
  displayMovie(id);
}

async function displayMovie(id) {
  detailsSection.replaceChildren(spinner());

  const movie = await getMovie(id);

  detailsSection.replaceChildren(createMovieCard(movie));
}

function createMovieCard(movie) {

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
                ${createControls(movie)}
            </div>
          </div>
        </div>
    `;

  return element;
}

function createControls(movie) {
    const user = JSON.parse(localStorage.getItem("user"));
    const isOwner = user && user._id == movie._ownerId;

    if(isOwner) {
        return `
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a> 
        `;
    } else {
        return `  
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>
        `;
    }
}

async function getMovie(id) {
  const res = await fetch(`http://localhost:3030/data/movies/${id}`);

  const movie = await res.json();

  return movie;
}
