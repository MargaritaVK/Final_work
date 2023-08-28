const baseElement  = require('../helpers/baseelement');
const pageFactory  = require('../pageobjects/pageFactory');

describe('Login and functionality check on personal page', () => {
  it('Check that the login on the page is carried out with the correct data', async () => {
    await pageFactory.basePage.navigate('https://oz.by/');
    await baseElement.clickElement(pageFactory.header.headerAuthButton);
    await pageFactory.loginPage.login('qaautomationtest333@gmail.com', 'NfL2jm');
    const username = await baseElement.getElementText(pageFactory.header.userName);
    expect(username).toEqual('oz31114711');
  });

  it('Check that username dropdown menu show correct tabs', async () => {
    await baseElement.getDropDown(pageFactory.header.userName, pageFactory.header.dropDownMenu);
    const text = await baseElement.getElementText(pageFactory.header.dropDownMenu);
    expect(text).toContain('Заказы' && 'Купленные товары');
  });

  it('Check that highlighting color of dropdown menu "Заказы" is blue', async () => {
    const color = await baseElement.getProperty(pageFactory.header.dropDownOrders, 'color');
    expect(color.value).toEqual('rgba(2,51,154,1)');
  });

  it('Should navigate to personal page and check number of purchases', async () => {
    await baseElement.clickElement(pageFactory.header.userName);
    const numPurchases = await baseElement.getElementText(pageFactory.personalPage.purchases);
    expect(numPurchases).toEqual('0 покупок');
  });

  it('Should cash back item be visible', async () => {
    const account = await baseElement.getElementText(pageFactory.personalPage.cashback);
    expect(account).toContain('5%');
  });

  it('Check that state of an account is displayed', async () => {
    const account = await baseElement.getElementText(pageFactory.personalPage.personalAccount);
    expect(account).toEqual('0,00 р.');
  });

  it('Should open the favorites tab and it is empty', async () => {
    await baseElement.clickElement(pageFactory.personalPage.favoritesTab);
    const count = await baseElement.getElementText(pageFactory.personalPage.favoritesWrapper);
    expect(count).toContain('нет товаров');
  });
});