import {html,render} from '../../node_modules/lit-html/lit-html.js';

const body = document.querySelector('body');

const rootTemplate = () =>html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>

<form class="hidden" id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" id="editTitle" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" id="editAuthor" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`;
render(rootTemplate(),body);

document.getElementById('loadBooks').addEventListener('click', loadBooks);


async function loadBooks() {

    const response = await fetch("http://localhost:3030/jsonstore/collections/books");

    const result = await response.json();
    const data = Object.entries(result);
    const tbody = document.querySelector('tbody');
    const booksTemplate = (book) => html`
    <tr data-id="${book[0]}">
                <td>${book[1].title}</td>
                <td>${book[1].author}</td>
                <td>
                    <button @click=${loadBook}>Edit</button>
                    <button @click=${deleteBook}>Delete</button>
                </td>
            </tr>
    `;

    render(data.map(booksTemplate),tbody);
}

document.getElementById('add-form').addEventListener('submit', createBook);

async function createBook(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');

    const response = await fetch('http://localhost:3030/jsonstore/collections/books',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title,author})
    })

    e.target.reset();
}

let id = null;
async function loadBook(e) {
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('edit-form').classList.remove('hidden');
    id = e.target.parentElement.parentElement.dataset.id
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);

    const result = await response.json();

    document.getElementById('editTitle').value = result.title;
    document.getElementById('editAuthor').value = result.author;

    document.getElementById('edit-form').addEventListener('submit',editBook);

}

async function editBook(e) {

    e.preventDefault();
    console.log(id);
    let formData = new FormData(e.target);

    let title = formData.get('title');
    let author = formData.get('author');

    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title,author}),
    });
    e.target.reset();
}

async function deleteBook(e) {
    id = e.target.parentElement.parentElement.dataset.id;
    
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
        method: 'DELETE',
    });
}


