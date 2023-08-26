const { BaseElement }  = require('../helpers/baseelement');
const { PageFactory } = require('../pageobjects/pageFactory');

const baseElement = new BaseElement();
const pageFactory = new PageFactory ();

describe('Functionality check on main page', () => {
  it('Navigate and check that page title should contain OZ.by', async () => {
    await pageFactory.basePage.navigate('https://oz.by/');
    const title = await browser.getTitle();
    expect(title).toContain('OZ.by');
  });

  it('Check that highlighting color of cart button is red', async () => {
    const color = await baseElement.getProperty(pageFactory.header.cart, 'color');
    expect(color.value).toEqual('rgba(205,69,0,1)');
  });

  it('Check that shop Locations dropdown menu show "Минск"', async () => {
    await baseElement.getDropDown(pageFactory.mainPage.shopLocations, pageFactory.mainPage.mapPopupShops);
    const text = await baseElement.getElementText(pageFactory.mainPage.mapPopupTitle);
    expect(text).toBe('Минск');
  });

  it('Check that footer button "Наверх" should navigate to top of page', async () => {
    await baseElement.scrollTo(pageFactory.mainPage.upButton);
    await baseElement.clickElement(pageFactory.mainPage.upButton);
    const element = await $(pageFactory.header.logo).isDisplayed();
    expect(element).toBe(true);
  });

  it('Check that footer link Facebook should navigate to link facebook.com', async () => {
    await pageFactory.footer.goToSocialLink();
    const url = await browser.getUrl();
    expect(url).toContain('facebook.com');
  });
});