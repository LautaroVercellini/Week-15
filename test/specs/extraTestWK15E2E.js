import LoginPage from '../pageobjects/loginPage.js';
import MainPage from '../pageobjects/mainPage.js';

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
        const isSortedZtoA = JSON.stringify(filteredTitles) === JSON.stringify(sortedTitles);
        expect(isSortedZtoA).toBe(true);
    });

    it('Verify that the products are sorted from lowest price to highest price after clicking the filter', async() => {
        const originalPrices = await
            $$('#inventory_container > div > div > div.inventory_item_description > div.pricebar > div').map(element => element.getText());
        const intPrices = originalPrices.map(element => parseFloat(element));
        const sortedPrices = intPrices.sort();
        await MainPage.filterProducts.click();
        await MainPage.priceLtoH.click();

        const filteredPrices = await
            $$('#inventory_container > div > div > div.inventory_item_description > div.pricebar > div').map(element => element.getText());
        const filteredIntPrices = filteredPrices.map(element => parseFloat(element));
        const isSortedLtoH = JSON.stringify(filteredIntPrices) === JSON.stringify(sortedPrices);
        expect(isSortedLtoH).toBe(true);
    });

    it('Verify that the products are sorted from higest price to lowest price after clicking the filter', async() => {
        const originalPrices = await
            $$('#inventory_container > div > div > div.inventory_item_description > div.pricebar > div').map(element => element.getText());
        const intPrices = originalPrices.map(element => parseFloat(element));
        const sortedPrices = intPrices.sort().reverse();
        await MainPage.filterProducts.click();
        await MainPage.priceHtoL.click();

        const filteredPrices = await
            $$('#inventory_container > div > div > div.inventory_item_description > div.pricebar > div').map(element => element.getText());
        const filteredIntPrices = filteredPrices.map(element => parseFloat(element));
        const isSortedHtoL = JSON.stringify(filteredIntPrices) === JSON.stringify(sortedPrices);
        expect(isSortedHtoL).toBe(true);
    });


});