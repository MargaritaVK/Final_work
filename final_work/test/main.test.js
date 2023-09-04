const baseElement  = require('../helpers/baseelement');
const pageFactory  = require('../pageobjects/pageFactory');

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

  it('Check that footer link Facebook should navigate to link facebook.com', async () => {
    await pageFactory.footer.goToSocialLink('facebook');
    const url = await browser.getUrl();
    expect(url).toContain('facebook.com');
  });
});