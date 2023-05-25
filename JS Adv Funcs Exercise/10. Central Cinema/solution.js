function solve() {
    let onScreenBtn = document.querySelector('#container button');
    onScreenBtn.type = 'button';


    onScreenBtn.addEventListener('click', addMovie);

    function addMovie() {
        let movieNameInput = document.querySelector('#container input:nth-of-type(1)').value;
        let hallInput = document.querySelector('#container input:nth-of-type(2)').value;
        let ticketPriceInput = document.querySelector('#container input:nth-of-type(3)').value;
        let ulMovieList = document.querySelector('#movies ul');
        ticketPriceInput = Number(ticketPriceInput);


        if(movieNameInput.length <= 0 || hallInput.length <= 0 || ticketPriceInput.length <= 0 || isNaN(ticketPriceInput) || ticketPriceInput <= 0){
            return;
        }
        let liElement = document.createElement('li');
        let movieTitleEl = document.createElement('span');
        movieTitleEl.textContent = movieNameInput;
        let hallElement = document.createElement('strong');
        hallElement.textContent = `Hall: ${hallInput}`;
        let divElement = document.createElement('div');
        let ticket = document.createElement('strong');
        ticket.textContent = ticketPriceInput.toFixed(2);
        let inputEl = document.createElement('input');
        inputEl.placeholder = 'Tickets Sold';
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';

        liElement.appendChild(movieTitleEl);
        liElement.appendChild(hallElement);
        divElement.appendChild(ticket);
        divElement.appendChild(inputEl);
        divElement.appendChild(archiveBtn);
        liElement.appendChild(divElement);
        ulMovieList.appendChild(liElement);

        archiveBtn.addEventListener('click', archiveFunc);
    }

    function archiveFunc(e) {
        let soldTicketsInput = e.currentTarget.parentElement.querySelector('input').value;
        soldTicketsInput = Number(soldTicketsInput);

        if(soldTicketsInput < 0 || isNaN(soldTicketsInput)) {
            return;
        }
        let movieTicketPrice = Number(e.currentTarget.parentElement.querySelector('strong').textContent);
        let totalAmountPrice = movieTicketPrice * soldTicketsInput;
        let archiveSection = document.querySelector('#archive ul');
        let movieTitle = e.currentTarget.parentElement.parentElement.querySelector('span').textContent;
        let totalAmountEl = document.createElement('strong');
        let newSpanMovie = document.createElement('span');
        newSpanMovie.textContent = movieTitle;
        totalAmountEl.textContent = `Total amount: ${totalAmountPrice.toFixed(2)}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        let liElement = document.createElement('li');
        liElement.appendChild(newSpanMovie);
        liElement.appendChild(totalAmountEl);
        liElement.appendChild(deleteBtn);

        archiveSection.appendChild(liElement);

        deleteBtn.addEventListener('click', deleteTickets);

        let mainLiElement = e.currentTarget.parentElement.parentElement.remove();
    }
 
    
    function deleteTickets(e) {
    e.currentTarget.parentElement.remove();
    }

    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', clearAll);

    function clearAll(e) {
        let allLiElements = e.currentTarget.parentElement.querySelectorAll('ul li');
        Array.from(allLiElements).forEach(x=> x.remove());
    }
}