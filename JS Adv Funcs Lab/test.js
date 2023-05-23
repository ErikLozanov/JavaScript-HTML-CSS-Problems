let book = {
    title: 'Hunter',
    author: 'Spisarevski',
}

function bookInfo(year) {

    console.log(`${this.title} was written by ${this.author} and was released in ${year}`);
}

let bookHunter = bookInfo.bind(this,'1999');

bookHunter();