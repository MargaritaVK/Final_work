const { BasePage } = require('./basepage');

class PersonalPage extends BasePage {
  constructor() {
    super();
    this.purchases = '.uc-purchase';
    this.personalAccount = '.uc-nav.uc-nav-last [href="/personal/account.phtml"]+sup';
    this.cashback = '.uc-allprops';
    this.favoritesTab = '#user-tab-wishlist';
    this.favoritesWrapper = '.search-info-results__content'
  }
}

module.exports = { PersonalPage };