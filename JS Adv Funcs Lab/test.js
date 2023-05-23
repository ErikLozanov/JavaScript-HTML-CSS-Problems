let book = {
    title: 'Hunter',
    author: 'Spisarevski',
}

function bookInfo(year) {

    console.log(`${this.title} was written by ${this.author} and was released in ${year}`);
}

bookInfo.call(book);
bookInfo.apply(book,['1999'])
let bookHunter = bookInfo.bind(book,'1999');

bookHunter();