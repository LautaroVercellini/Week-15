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

    it('Check that the shopping cart returns to zero by clicking the reset button in the hamburger menu', async() => {
        await MainPage.firstAddCartButton.click();
        await MainPage.secondAddCartButton.click();

        const numberIcon = await MainPage.numberCartIcon.getText()

        expect(numberIcon).toEqual('2');
        await MainPage.menuIcon.click();
        await MainPage.resetButton.click();
        const numberNotDisplayed = !( await MainPage.numberCartIcon.isDisplayed())
        expect(numberNotDisplayed).toBe(false);

        await MainPage.closeSideBar.click();
    });

    it('Check for proper navigation from the twitter icon', async () => {
        await MainPage.scrollDownToFooter();
        await MainPage.twitterIcon.click();
        const windowHandles = await browser.getWindowHandles();

        const twitter = windowHandles[windowHandles.length - 1];
        await browser.switchToWindow(twitter);

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://twitter.com/saucelabs');

        await browser.closeWindow();

        const originalWindowHandle = windowHandles[0];
        await browser.switchToWindow(originalWindowHandle)
    });

    it('Check for proper navigation from the facebook icon', async () => {
        await MainPage.scrollDownToFooter();
        await MainPage.facebookIcon.click();
        const windowHandles = await browser.getWindowHandles();

        const facebook = windowHandles[windowHandles.length - 1];
        await browser.switchToWindow(facebook);

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.facebook.com/saucelabs');

        await browser.closeWindow();

        const originalWindowHandle = windowHandles[0];
        await browser.switchToWindow(originalWindowHandle)
    });

    it('Check for proper navigation from the linkedIn icon', async () => {
        await MainPage.scrollDownToFooter();
        await MainPage.linkedinIcon.click();
        const windowHandles = await browser.getWindowHandles();

        const linkedIn = windowHandles[windowHandles.length - 1];
        await browser.switchToWindow(linkedIn);

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.linkedin.com/company/sauce-labs/');

        await browser.closeWindow();

        const originalWindowHandle = windowHandles[0];
        await browser.switchToWindow(originalWindowHandle)
    });
});