import {chromium, devices} from "playwright";
import {expect} from "chai";
import {afterEach} from "mocha";
import {MapEn} from "../page-object/map-en";
import {MapDe} from "../page-object/map-de";
import {MapRu} from "../page-object/map-ru";
const iPhone11 = devices['iPhone 11 Pro'];

describe("Tutte le strande partono da Roma",function (){

    let browser

    beforeEach(async () => {
        browser = await chromium.launch( {"headless": false,
            "slowMo": 0});
    })
    afterEach(async ()=>{
        await browser.close();
    })

    it('En', async () => {
       let context = await browser.newContext({
            ...iPhone11,
            locale: 'en-US',
            geolocation: { longitude:  -0.116773,latitude: 51.510357  },
            permissions: ['geolocation']
        })
        let page = await context.newPage();
        let map = new MapEn(page)
        await map.goto()
        await map.stayOnWeb()
        await map.goOnColosseo()
        expect( await map.howMuchToBicycling.textContent()).to.eql("4 days")
        expect( await map.howMuchToDriving.textContent()).to.eql("20 hr")
        expect( await map.howMuchToTransit.textContent()).to.eql("17 hr")
        expect( await map.howMuchToWalking.textContent()).to.eql("14 days")

    })

    it('be', async () => {
        let context = await browser.newContext({
            ...iPhone11,
            locale: 'de-DE',
            geolocation: { longitude: 13.390363,latitude: 52.50759 },
            permissions: ['geolocation']
        })
        let page = await context.newPage();
        let map = new MapDe(page)
        await map.goto()
        await map.stayOnWeb()
        await map.goOnColosseo()
        expect( await map.howMuchToBicycling.textContent()).to.eql("4 Tage")
        expect( await map.howMuchToDriving.textContent()).to.eql("15 h")
        expect( await map.howMuchToTransit.textContent()).to.eql("15 h")
        expect( await map.howMuchToWalking.textContent()).to.eql("13 Tage")

    })

    it('ru', async () => {
        let context = await browser.newContext({
            ...iPhone11,
            locale: 'ru-RU',
            geolocation:  {latitude: 59.95, longitude: 30.32},
            permissions: ['geolocation']
        })
        let page = await context.newPage();
        let map = new MapRu(page)
        await map.goto()
        await map.stayOnWeb()
        await map.goOnColosseo()
        expect( await map.howMuchToDriving.textContent()).to.eql("33 ч")
        expect( await map.howMuchToTransit.textContent()).to.eql("2 дн")
        expect( await map.howMuchToWalking.textContent()).to.eql("24 дн")

    })

})