class MainPage {

    get appLogo() { return $('.app_logo') };
    get cartIcon() { return $('#shopping_cart_container > a') };
    get menuIcon() { return $('#react-burger-menu-btn') };
    get productsIcon() { return $('.title')};
    get logoutButton() { return $('#logout_sidebar_link')};

    get filterProducts() { return $('[data-test="product_sort_container"]')};
    get sortAtoZ() { return $('[data-test="product_sort_container"] > option')};
    get sortZtoA() { return $('[data-test="product_sort_container"] > option:nth-child(2)')};
    get priceLtoH() { return $('[data-test="product_sort_container"] > option:nth-child(3)')};
    get priceHtoL() { return $('[data-test="product_sort_container"] > option:nth-child(4)')};

    get firstImage() { return $('#item_4_img_link > img')};
    get firstProductTitle() { return $('#item_4_title_link')};
    get firstPrice() { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')}
    get firstAddCartButton() { return $('#add-to-cart-sauce-labs-backpack')};
    get removeFirstProduct() { return $('#remove-sauce-labs-backpack')};

    get secondImage() { return $('#item_0_img_link > img')};
    get secondProductTitle() { return $('#item_0_title_link')};
    get secondPrice() { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div')}
    get secondAddCartButton() { return $('#add-to-cart-sauce-labs-bike-light')};
    get removeSecondProduct() { return $('#remove-sauce-labs-bike-light')};

    get thirdImage() { return $('#item_1_img_link > img')};
    get thirdProductTitle() { return $('#item_1_title_link')};
    get thirdPrice() { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div')}
    get thirdAddCartButton() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get removeThirdProduct() { return $('#remove-sauce-labs-bolt-t-shirt')};

    get fourthImage() { return $('#item_5_img_link > img')};
    get fourthProductTitle() { return $('#item_5_title_link')};
    get fourthPrice() { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div')}
    get fourthAddCartButton() { return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get removeFourthProduct() { return $('#remove-sauce-labs-fleece-jacket')};

    get fifthImage() { return $('#item_2_img_link > img')};
    get fifthProductTitle() { return $('#item_2_title_link')};
    get fifthPrice() { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div')}
    get fifthAddCartButton() { return $('#add-to-cart-sauce-labs-onesie')};
    get removeFifthProduct() { return $('#remove-sauce-labs-onesie')};

    get sixthImage() { return $('#item_3_img_link > img')};
    get sixthProductTitle() { return $('#item_3_title_link')};
    get sixthPrice() { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div')}
    get sixthAddCartButton() { return $('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)')};
    get removeSixthProduct() { return $('#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)')};

    get footer() { return $('.footer')};
    get twitterIcon() { return $('.social_twitter')};
    get facebookIcon() { return $('.social_facebook')};
    get linkedinIcon() { return $('.social_linkedin')};

    async scrollUpToHeader() {
        await browser.execute(() => {
            const header = document.querySelector('.app_logo');
            if(header) {
                header.scrollIntoView();
            };
        });
    };

    async scrollDownToFooter() {
        await browser.execute(() => {
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.scrollIntoView();
            };
        });
    };

    async waitForElementsToBeDisplayed() {
        await Promise.all([
            this.appLogo.waitForDisplayed(),
            this.cartIcon.waitForDisplayed(),
            this.menuIcon.waitForDisplayed(),
            this.productsIcon.waitForDisplayed(),
            this.firstImage.waitForDisplayed(),
            this.firstProductTitle.waitForDisplayed(),
            this.firstPrice.waitForDisplayed(),
            this.firstAddCartButton.waitForDisplayed(),
            this.secondImage.waitForDisplayed(),
            this.secondProductTitle.waitForDisplayed(),
            this.secondPrice.waitForDisplayed(),
            this.secondAddCartButton.waitForDisplayed(),
            this.thirdImage.waitForDisplayed(),
            this.thirdProductTitle.waitForDisplayed(),
            this.thirdPrice.waitForDisplayed(),
            this.thirdAddCartButton.waitForDisplayed(),
            this.fourthImage.waitForDisplayed(),
            this.fourthProductTitle.waitForDisplayed(),
            this.fourthPrice.waitForDisplayed(),
            this.fourthAddCartButton.waitForDisplayed(),
            this.fifthImage.waitForDisplayed(),
            this.fifthProductTitle.waitForDisplayed(),
            this.fifthPrice.waitForDisplayed(),
            this.fifthAddCartButton.waitForDisplayed(),
            this.sixthImage.waitForDisplayed(),
            this.sixthProductTitle.waitForDisplayed(),
            this.sixthPrice.waitForDisplayed(),
            this.sixthAddCartButton.waitForDisplayed(),
            this.footer.waitForDisplayed(),
            this.twitterIcon.waitForDisplayed(),
            this.facebookIcon.waitForDisplayed(),
            this.linkedinIcon.waitForDisplayed(),
        ]);
    };



    async logout () {
        await this.menuIcon.click();
        await this.logoutButton.click();
    };
};

export default new MainPage();

/*const link = await $('=WebdriverIO')
await expect(link).toHaveText('WebdriverIO')
await expect(link).toHaveAttribute('href', 'https://webdriver.io')*/