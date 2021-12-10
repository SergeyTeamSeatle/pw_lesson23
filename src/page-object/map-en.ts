import { Locator, Page } from 'playwright';
import {Map} from "./map";

export class MapEn extends Map{
    readonly page: Page;
    readonly stayOnWebButton :Locator
    readonly FindTextBoxEng :Locator
    readonly DirectionsEng :Locator
    readonly yourLocation :Locator
    readonly howMuchToWalking :Locator
    readonly howMuchToBicycling :Locator
    readonly howMuchToTransit :Locator
    readonly howMuchToDriving :Locator
    constructor(page: Page) {
        super(page)
        this.stayOnWebButton =this.page.locator('text=Stay on web');
        this.FindTextBoxEng =this.page.locator('text=Find a place');
        this.DirectionsEng =this.page.locator('xpath=.//img[@alt="Directions"]');
        this.yourLocation =this.page.locator('text=Your location');
        this.howMuchToWalking =this.page.locator('xpath=.//span[@aria-label="Walking Mode"]//parent::*/span[2]');
        this.howMuchToBicycling =this.page.locator('xpath=.//span[@aria-label="Bicycling Mode"]//parent::*/span[2]');
        this.howMuchToTransit =this.page.locator('xpath=.//span[@aria-label="Transit Mode"]//parent::*/span[2]');
        this.howMuchToDriving =this.page.locator('xpath=.//span[@aria-label="Driving Mode"]//parent::*/span[2]');
    }

    async stayOnWeb() {
        await super.stayOnWeb(this.stayOnWebButton)
    }

    async goOnColosseo() {
        await super.goOnColosseo(this.FindTextBoxEng,this.DirectionsEng,this.yourLocation)
    }

}