class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if(this.capacity <= 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({bookName,bookAuthor,payed: false});
        this.capacity -= 1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let isFound = this.books.find(x=> x.bookName == bookName);

        if(!isFound) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(isFound.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        isFound.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let isFound = this.books.find(x=> x.bookName == bookName);

        if(!isFound) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if(!isFound.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if(bookAuthor == undefined) {
            let result = [];
            result.push(`The book collection has ${this.capacity} empty spots left.`);

            this.books.sort((a,b)=> a.bookName.localeCompare(b.bookName));
            this.books.forEach(x=> result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`))
            return result.join('\n');
        } else {
            let isFound = this.books.find(x=> x.bookAuthor == bookAuthor);

            if(!isFound) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            return `${isFound.bookName} == ${isFound.bookAuthor} - ${isFound.payed ? 'Has Paid' : 'Not Paid'}.`;
        }
    }
}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
console.log(library.getStatistics());



