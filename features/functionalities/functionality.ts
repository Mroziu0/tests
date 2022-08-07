export class Functionality {
    async open() {
        await browser.url(`https://candidatex:qa-is-cool@qa-task.backbasecloud.com/`)
    }

    async pause(number: number) {
        await browser.pause(1000 * number)
    }

    protected async waitUntilElementVisible(element: Element, timeout: number = 5000) {
        await await element.waitForDisplayed({ timeout: timeout });
    }
}