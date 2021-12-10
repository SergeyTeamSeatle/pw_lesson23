import { Locator, Page } from 'playwright';

export class Base {
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('//h1');


    }
    async goto(url) {
        await this.page.goto(url);
    }


    async getHeader() {
       return  this.header.textContent()
    }



}