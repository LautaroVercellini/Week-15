import LoginPage from '../pageobjects/loginPage.js';
import MainPage from '../pageobjects/mainPage.js';
import InventoryDetailsPage from '../pageobjects/inventoryDetailsPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutStepOne from '../pageobjects/checkoutStepOne.js';
import CheckoutStepTwo from '../pageobjects/checkoutStepTwo.js';
import CheckoutComplete from '../pageobjects/checkoutComplete.js';

describe ('Check elements and functionalities with standard user', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1209, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('login with valid credentials', async () => {
        await LoginPage.logIn('standard_user', 'secret_sauce');
        await LoginPage.clickLoginButton();
    });

    it('Verify that the products are sorted from A to Z after clicking the filter.', async () => {
        const originalTitles = await $$('[id^="item_"][id$="_title_link"]').map(element => element.getText());
        await MainPage.filterProducts.click();
        await MainPage.sortAtoZ.click();

        const filteredTitles = await $$('[id^="item_"][id$="_title_link"]').map(element => element.getText());
        const sortedTitles = originalTitles.slice().sort();
        const isSortedCorrectly = JSON.stringify(filteredTitles) === JSON.stringify(sortedTitles);
        expect(isSortedCorrectly).toBe(true);
    });

    it('Verify that the products are sorted from Z to A after clicking the filter.', async () => {
        const originalTitles = await $$('[id^="item_"][id$="_title_link"]').map(element => element.getText());
        await MainPage.filterProducts.click();
        await MainPage.sortZtoA.click();

        const filteredTitles = await $$('[id^="item_"][id$="_title_link"]').map(element => element.getText());
        const sortedTitles = originalTitles.slice().sort().reverse();
        const isSortedCorrectly = JSON.stringify(filteredTitles) === JSON.stringify(sortedTitles);
        expect(isSortedCorrectly).toBe(true);
    });

    
});




/* get allPrices() { return $$('#inventory_container > div > div > div.inventory_item_description > div.pricebar > div')};
        get allTitles() { return $$('[id^="item_"][id$="_title_link"]')}
    });
*/
