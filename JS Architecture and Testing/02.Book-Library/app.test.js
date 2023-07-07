const chromium = require('playwright-chromium').chromium;
const expect = require('chai').expect;

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
};

let browser,page;
let host = 'http://127.0.0.1:5500/JS%20Architecture%20and%20Testing/02.Book-Library/index.html';
describe('E2E Tests',function (){

    before(async()=> {
        browser = await chromium.launch({headless: false,slowMo:2000});
    });
    after(async()=>{
        await browser.close();
    });

    beforeEach(async()=>{
        page = await browser.newPage();
    });
    afterEach(async()=>{
        await page.close();
    });

    it.skip('Should load all books', async()=>{
        await page.route('**/jsonstore/collections/books', (route,request) => {
            route.fulfill({
                status: 200,
                body: JSON.stringify(mockData),
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json',

                }
            });
        })

        await page.goto(host);
        await page.locator('text=LOAD ALL BOOKS').click();
        await page.waitForSelector('text=Harry Potter');
        let allBooks = await page.$$eval('tbody tr', rows => rows.map(x => x.textContent));
        let arr  = Object.values(allBooks);
        expect(arr[0]).to.contains('Harry Potter');
        expect(arr[0]).to.contains('J.K.Rowling');
        expect(arr[1]).to.contains('C# Fundamentals');
        expect(arr[1]).to.contains('Svetlin Nakov');
    })

    it.skip('Should add a book', async()=>{
        // navigate to page
        await page.goto(host);

        // fill in the inputs
        await page.fill('input[name=title]','Lord Of The Rings');
        await page.fill('input[name=author]','J.R.R Tolkien');

        // Click Submit Button
        const [request] = await Promise.all([
            page.waitForRequest((request)=> request.method() == 'POST'),
            page.click('text=Submit')
        ]);
        
        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Lord Of The Rings');
        expect(data.author).to.equal('J.R.R Tolkien');
    })


    it('Should edit a book',async()=>{

        // navigate to page
        await page.goto(host);

        // load all books
        await page.locator('text=LOAD ALL BOOKS').click();

        // click on edit
        await page.locator('.editBtn').first().click();
        // check if correct input data is loaded in the form
        const title = await page.locator('#editForm input[name=title]').inputValue();
        const author = await page.locator('#editForm input[name=author]').inputValue();
        console.log(title);
        console.log(author);
        expect(title).to.equal('Harry Potter and the Philosopher\'s Stone');
        expect(author).to.equal('J.K.Rowling');
        // change author name
        await page.fill('#editForm input[name=author]','J.R.R Tolkien');
        await page.fill('#editForm input[name=title]','Lord of the rings');
        // click Save button
        const [request] = await Promise.all([
            page.waitForRequest((request)=> request.method() == 'PUT'),
            page.click('text=Save')
        ]);
        
        const data = JSON.parse(request.postData());
        expect(data.author).to.equal('J.R.R Tolkien');
        expect(data.title).to.equal('Lord of the rings');
    })
})