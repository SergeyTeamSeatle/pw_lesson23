import { Locator, Page } from 'playwright';
import {Map} from "./map";

export class MapRu extends Map{
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
        this.stayOnWebButton =this.page.locator('text=Используйте веб-версию');
        this.FindTextBoxEng =this.page.locator('text=Найдите место');
        this.DirectionsEng =this.page.locator('text=Проложить маршрут');
        this.yourLocation =this.page.locator('text=Мое местоположение');
        this.howMuchToWalking =this.page.locator('xpath=.//span[@aria-label="Пешком"]//parent::*/span[2]');
        this.howMuchToBicycling =this.page.locator('xpath=.//span[@aria-label="На велосипеде"]//parent::*/span[2]');
        this.howMuchToTransit =this.page.locator('xpath=.//span[@aria-label="Общественным транспортом"]//parent::*/span[2]');
        this.howMuchToDriving =this.page.locator('xpath=.//span[@aria-label="На автомобиле"]//parent::*/span[2]');
    }

    async stayOnWeb() {
        await super.stayOnWeb(this.stayOnWebButton)
    }

    async goOnColosseo() {
        await super.goOnColosseo(this.FindTextBoxEng,this.DirectionsEng,this.yourLocation)
    }

}