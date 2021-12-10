import { Locator, Page } from 'playwright';
import {Base} from "./base";

export class Map extends Base{
    readonly page: Page;
    readonly images :Locator
    readonly mapLoad :Locator
    constructor(page: Page) {
        super(page)
        this.images =this.page.locator('xpath = aria-label="Show details"');
        this.mapLoad =this.page.locator('xpath=.//div[@class="map-extent"]');
    }
    async goto() {
        await super.goto('https://www.google.com/maps');
    }

    async stayOnWeb(locator) {
        await locator.click()
    }

    async goOnColosseo(findTextBox,directions,yourLocation) {
        await findTextBox.click()
        await this.page.keyboard.insertText("Rim Colosseum")
        await this.page.keyboard.press("Enter")
        await this.images.valueOf()
        await directions.click()
        await yourLocation.click()
        await this.mapLoad.waitFor()
    }

}