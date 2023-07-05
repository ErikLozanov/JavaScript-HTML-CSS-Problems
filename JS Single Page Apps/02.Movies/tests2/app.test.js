const chromium = require('playwright-chromium').chromium;
const expect = require('chai').expect;

let browser;
let page;

describe('E2E Tests', function() {

    before(async ()=> {
        browser = await chromium.launch({headless: false,slowMo: 1500, });
        
    });
    after(async ()=> {await browser.close(); });
    beforeEach(async () => {page = await browser.newPage(); });
    afterEach(async () => {await page.close(); });

    describe.skip('Movies',function () {
        
        it.skip('Should take a screenshot', async function(){
            await page.goto('http://localhost:5500');
            await page.screenshot({path: 'index.png'});
        });

        it('Should load all Movies',async function (){
            let url = 'http://localhost:3030/data/movies';
            let movies = [
                {
                    "title": "Black Widow",
                    "img": "https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg",
                    "_id": "1"
                },
                {
                    "title": "Test 2",
                    "img": "https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg",
                    "_id": "2"
                },
                {
                    "title": "Test 3",
                    "img": "https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg",
                    "_id": "3"
                },
            ]

            await page.route('**/data/movies', route => route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(movies),
            }));

            await page.goto('http://127.0.0.1:5500/JS%20Single%20Page%20Apps/02.Movies/index.html');
            let titles = [];
            
            let elements = await page.locator('css=.card-body h4').all();
            for(let element of elements) {
                let text = await element.textContent();
                titles.push(text);
            }
            expect(titles.length).to.equal(3);
            expect(titles[0]).to.equal('Black Widow');
            expect(titles[1]).to.equal('Test 2');
            expect(titles[2]).to.equal('Test 3');
        })
    })


    describe('Login',function () {

        it('Should send correct data',async function (){
            let user = {
                accessToken: "1",
                email: "test",
                username: "user",
                _id: "2",
            }

            let email;
            let password;

            await page.route('**/users/login', (route,request) =>{

                let body = JSON.parse(request.postData());
                email = body.email;
                password = body.password;


                route.fulfill({
                                status: 200,
                                contentType: 'application/json',
                                body: JSON.stringify(user),
            });
            }) 

            await page.goto('http://127.0.0.1:5500/JS%20Single%20Page%20Apps/02.Movies/index.html');
            // await page.locator('text=Login').click();
            await page.click('text=Login');
            await page.fill('input[name="email"]','peter@abv.bg');
            await page.fill('input[name="password"]','123456');

            await Promise.all([
                page.waitForResponse('**/users/login'),
                page.click('text=Log in'),
            ]);

            expect(email).to.equal('peter@abv.bg');
            expect(password).to.equal('123456');
            
        })
    })
})