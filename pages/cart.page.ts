import { Page } from "@playwright/test";

class CartPage {
    private page: Page;
    constructor (page: Page) {
        this.page = page;
    }
    async navigate(){
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
}
export default CartPage;