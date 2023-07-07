const { request } = require('playwright-chromium');

const chromium = require('playwright-chromium').chromium;
const expect = require('chai').expect;

let host = 'http://127.0.0.1:5500/JS%20Architecture%20and%20Testing/01.Messenger/';
let browser,page,context;

describe('E2E Tests', function() {

    before(async()=>{
        browser = await chromium.launch();
    })
    after(async()=>{
        await browser.close();
    })
    beforeEach(async()=>{
        page = await browser.newPage();
    })
    afterEach(async()=>{
        await page.close();
    })
    let msg = {
        "-LxHVtajG3N1sU714pVj": {
            "author": "Spami",
            "content": "Hello, are you there?"
        },
        "-LxIDxC-GotWtf4eHwV8": {
            "author": "Garry",
            "content": "Yep, whats up :?"
        },
        "-LxIDxPfhsNipDrOQ5g_": {
            "author": "Pami",
            "content": "How are you? Long time no see? :)"
        },
        "-LxIE-dM_msaz1O9MouM": {
            "author": "George",
            "content": "Hello, guys! :))"
        },
        "-LxLgX_nOIiuvbwmxt8w": {
            "author": "Pami",
            "content": "Hello, George nice to see you! :)))"
        }
    }

    it('loads all msg', async({request})=>{
        const response = await request.get('http://localhost:3030/jsonstore/messenger')
        const result = JSON.parse(await response.text());
        // await page.goto(host);
        // await page.locator('#refresh').click();
        expect(response.status()).toBe(200);
        expect(result)
        console.log(result);
        console.log(1);
    })
});