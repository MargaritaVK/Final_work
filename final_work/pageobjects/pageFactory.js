const { BasePage } = require('./basePage');
const { Header } = require('./components/header');
const { LoginPage } = require('./loginPage');
const { PersonalPage } = require('./personalPage');
const { CartPage } = require('./cartPage');
const { SearchListPage } = require('./searchListPage');
const { ProductPage } = require('./productPage');
const { MainPage } = require('./mainPage');
const { Footer } = require('./components/footer');

class PageFactory {
  constructor() {
    this.basePage = new BasePage();
    this.header = new Header();
    this.loginPage = new LoginPage();
    this.searchListPage = new SearchListPage();
    this.personalPage = new PersonalPage();
    this.cartPage = new CartPage();
    this.productPage = new ProductPage();
    this.mainPage = new MainPage();
    this.footer = new Footer();
  }
}

module.exports = new PageFactory ();