import { Page } from "./page";

export class MainPage extends Page {
    getMainPageLogo() {
        return this.byXpath(`//div[@class = 'home-page']//h1[@class = 'logo-font']`);
    }
}