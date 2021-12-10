import { Locator, Page } from 'playwright';
import {Base} from "./base";

export class GetStart extends Base{
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly tocList: Locator;
    readonly tabNode : Locator;
    readonly tabSelected : Locator;
    readonly tabPython: Locator;
    readonly tabDotNet: Locator;
    readonly tabJava: Locator;

    constructor(page: Page) {
        super(page)
        this.getStartedLink = page.locator('text=Get started');
        this.tocList = page.locator('article ul > li > a');
        this.tabNode = page.locator('text=Node.js');
        this.tabPython = page.locator('text=Python');
        this.tabDotNet = page.locator('text=.NET');
        this.tabJava = page.locator('text=Java');
        this.tabSelected = page.locator('xpath=.//div[@class="navbar__item dropdown dropdown--hoverable"][2]');

    }
    async goto() {
        await super.goto('https://playwright.dev');
    }

    async getStarted() {
        await this.getStartedLink.first().click();
        await this.header.waitFor();
    }

    async getСurrentUrl() {
        return  this.page.url()
    }

    async switchToPython() {
        await this.tabSelected.hover();
        await this.tabPython.first().click();
        await this.tocList.first().waitFor();
    }

    async switchToJava() {
        await this.tabSelected.hover();
        await this.tabJava.first().click();
        await this.tocList.first().waitFor();
    }

    async switchToDotNet() {
        await this.tabSelected.hover();
        await this.tabDotNet.first().click();
        await this.tocList.first().waitFor();
    }
}