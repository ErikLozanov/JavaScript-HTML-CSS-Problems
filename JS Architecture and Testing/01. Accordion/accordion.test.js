const chromium = require('playwright-chromium').chromium;
const expect = require('chai').expect;

let browser;
let page;

describe('E2E Tests', function (){

    before(async ()=> {
        browser = await chromium.launch({headless: false,slowMo: 1500, });
        
    });
    after(async ()=> {await browser.close(); });
    beforeEach(async () => {page = await browser.newPage(); });
    afterEach(async () => {await page.close(); });


        
        it.skip('Should load all titles',async function(){
            await page.goto('http://127.0.0.1:5500/JS%20Architecture%20and%20Testing/01.%20Accordion/index.html');
           
           const titles = await page.locator('div.head>span').allTextContents();

            console.log(titles);
            expect(titles.length).to.equal(4);
            expect(titles[0]).to.equal('Scalable Vector Graphics');
            expect(titles[1]).to.equal('Open standard');
            expect(titles[2]).to.equal('Unix');
            expect(titles[3]).to.equal('ALGOL');
        })


        it('Should show more text',async function(){

            await page.goto('http://127.0.0.1:5500/JS%20Architecture%20and%20Testing/01.%20Accordion/index.html');

            await page.locator('button[id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3"]').click();

            const text = await page.textContent('button[id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3"]');
            const isVisible = await page.isVisible('.extra');
            const content = await page.locator('div.extra p').first().allTextContents();

            expect(content.length).to.be.greaterThan(0);
            expect(isVisible).to.be.true;
        })
        it('Should show less text',async function(){

            await page.goto('http://127.0.0.1:5500/JS%20Architecture%20and%20Testing/01.%20Accordion/index.html');

            await page.locator('button[id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3"]').click();

            const text = await page.textContent('button[id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3"]');

            expect(text).to.equal('Less')

            await page.getByText('Less').first().click();
            const isVisible = await page.isVisible('.extra');

            expect(isVisible).to.be.false;
        })
});