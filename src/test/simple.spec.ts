import {GetStart} from "../page-object/get-start";
import {Locator, Page, Browser, chromium, devices} from 'playwright';
import {expect} from "chai";



describe('Simple Tests', function () {
    let browser
    let context
    before(async function () {
        browser = await chromium.launch({
            "headless": false,
            "slowMo": 0
        });
        context = await browser.newContext()

    })
    after(async ()=>{
        await browser.close();
    })
        it('Getting started open Node js', async () => {
            let page = await context.newPage();
            let docPageDev = new GetStart(page)
            await docPageDev.goto()
            await docPageDev.getStarted()
            expect(await docPageDev.getHeader()).to.eql("Getting started","wrong page")
            expect(await docPageDev.getСurrentUrl()).to.eql("https://playwright.dev/docs/intro","wrong page")
            expect( await docPageDev.tocList.allTextContents()).to.eql([
                "Installation",
                "First test",
                "Configuration file",
                "Writing assertions",
                "Using test fixtures",
                "Using test hooks",
                "Command line",
                "Configure NPM scripts",
                "Release notes"
            ])
        })
    it('Getting started open python', async () => {
        let page = await context.newPage();
        let docPageDev = new GetStart(page)
        await docPageDev.goto()
        await docPageDev.getStarted()
        await docPageDev.switchToPython()
        expect(await docPageDev.getHeader()).to.eql("Getting started","wrong page")
        expect(await docPageDev.getСurrentUrl()).to.eql("https://playwright.dev/python/docs/intro/","wrong page")
        expect( await docPageDev.tocList.allTextContents()).to.eql([
            "Installation",
            "Usage",
            "First script",
            "Record scripts",
            "With Pytest",
            "Interactive mode (REPL)",
            "Pyinstaller",
            "Known issues",
            "System requirements",
            "Release notes"
        ])
    })

    it('Getting started open Java', async () => {
        let page = await context.newPage();
        let docPageDev = new GetStart(page)
        await docPageDev.goto()
        await docPageDev.getStarted()
        await docPageDev.switchToJava()
        expect(await docPageDev.getHeader()).to.eql("Getting started","wrong page")
        expect(await docPageDev.getСurrentUrl()).to.eql("https://playwright.dev/java/docs/intro/","wrong page")
        expect( await docPageDev.tocList.allTextContents()).to.eql([
            "Installation",
            "Usage",
            "First script",
            "Record scripts",
            "System requirements",
            "Release notes"
        ])
    })

    it('Getting started open .NET', async () => {
        let page = await context.newPage();
        let docPageDev = new GetStart(page)
        await docPageDev.goto()
        await docPageDev.getStarted()
        await docPageDev.switchToDotNet()
        expect(await docPageDev.getHeader()).to.eql("Getting started","wrong page")
        expect(await docPageDev.getСurrentUrl()).to.eql("https://playwright.dev/dotnet/docs/intro/","wrong page")
        expect( await docPageDev.tocList.allTextContents()).to.eql([
            "First project",
            "First test",
            "Record scripts",
            "System requirements",
            "Release notes"
        ])
    })

})