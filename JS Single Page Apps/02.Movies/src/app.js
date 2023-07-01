// [x] Improve HTML Structure
// [x] Create app.js module
// [x] Create router.js containing hide and display of view
// [x] placeholders for all views

// implement views
// - create request logic
// - DOM manipulation logic
// [ ] Catalog
// [ ] Login
// [ ] Register
// [ ] Create
// [ ] Details
// [ ] Like
// [ ] Edit
// [ ] Delete

import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";


const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logoutPage,
}

document.querySelector('nav').addEventListener('click',onNavigate)
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate)
function onNavigate(e) {
    if(e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        // console.log(url.pathname);

        const view = routes[url.pathname];
        if(typeof view == 'function') {
            view();
        }
    }
}


const detailsSection = document.querySelector('#movie-example');
const editSection = document.querySelector('#edit-movie');



function logoutPage() {
    alert('logged out');
}


// Start application in catalog view
homePage();