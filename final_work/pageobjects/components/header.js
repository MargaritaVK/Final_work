const { BasePage } = require('../basepage');
const baseElement = require('../../helpers/baseelement');

class Header extends BasePage {
  constructor() {
    super();
    this.headerAuthButton = '.top-panel__userbar__auth';
    this.userName = '.top-panel__userbar__user__name';
    this.searchField = '#top-s[name]';
    this.dropDownMenu = '#mobile-userbar.top-panel__userbar__ppnav';
    this.dropDownOrders = '//*[span="Заказы"]';
    this.cart = 'a.top-panel__userbar__cart__item';
    this.logo = '.top-panel__logo';
  }

  async search(searchText) {
    await baseElement.clickElement(this.searchField);
    await baseElement.inputText(this.searchField, searchText);
    await browser.keys('Enter');
  }
}

module.exports = { Header };