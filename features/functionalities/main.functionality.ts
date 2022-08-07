import { Functionality } from "../functionalities/functionality";
import { MainPage } from "../pageobjects/main.page";

const mainPage = new MainPage();

export class MainFunctionality extends Functionality {
    public async waitUntilPageWillLoad() {
        const el = await mainPage.getMainPageLogo();
        this.waitUntilElementVisible(el);
    }
}