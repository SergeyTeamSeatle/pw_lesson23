import { Locator, Page } from 'playwright';
import {Map} from "./map";

export class MapDe extends Map{
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
        this.stayOnWebButton =this.page.locator('text=Auf Website bleiben');
        this.FindTextBoxEng =this.page.locator('text=Ort finden');
        this.DirectionsEng =this.page.locator('text=Routen­planer');
        this.yourLocation =this.page.locator('text=Mein Standort');
        this.howMuchToWalking =this.page.locator('xpath=.//span[@aria-label="Zu Fuß"]//parent::*/span[2]');
        this.howMuchToBicycling =this.page.locator('xpath=.//span[@aria-label="Mit dem Fahrrad"]//parent::*/span[2]');
        this.howMuchToTransit =this.page.locator('xpath=.//span[@aria-label="Mit öffentlichen Verkehrsmitteln"]//parent::*/span[2]');
        this.howMuchToDriving =this.page.locator('xpath=.//span[@aria-label="Mit dem Auto"]//parent::*/span[2]');
    }

    async stayOnWeb() {
        await super.stayOnWeb(this.stayOnWebButton)
    }

    async goOnColosseo() {
        await super.goOnColosseo(this.FindTextBoxEng,this.DirectionsEng,this.yourLocation)
    }

}