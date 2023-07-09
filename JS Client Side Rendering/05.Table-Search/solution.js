import {html,render} from '../../node_modules/lit-html/lit-html.js';

solve();
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   loadAllStudents();
   function onClick() {
     
      const allStudents = document.querySelectorAll('tbody tr');
      let searchText = document.getElementById('searchField').value.toUpperCase();
      allStudents.forEach(student=> {
         const name = student.querySelectorAll('td')[0].textContent.toUpperCase();
         const email = student.querySelectorAll('td')[1].textContent.toUpperCase();
         const course = student.querySelectorAll('td')[2].textContent.toUpperCase();
         if(name.includes(searchText) || email.includes(searchText) || course.includes(searchText)) {
            student.classList.add('select');
         } else {
            student.classList.remove('select');
         }
      });
      document.getElementById('searchField').value = '';
   }


   async function loadAllStudents() {
      const response = await fetch('http://localhost:3030/jsonstore/advanced/table');

      const result = await response.json();
      const root = document.querySelector('tbody');
      const data = Object.values(result);
      const studentsTemplate = (student) => html`
                  <tr>
                <td>${student.firstName} ${student.lastName}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
            </tr>
      `
      render(data.map(studentsTemplate),root);
      // render(mockData.map(studentsTemplate),root);
   }
}