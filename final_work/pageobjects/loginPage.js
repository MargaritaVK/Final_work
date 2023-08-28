const { BasePage } = require('./basepage');
const baseElement = require('../helpers/baseelement');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginWithEmail = '#loginFormLoginEmailLink';
    this.inputEmail = '.i-input-group__cell .i-input[type="email"]';
    this.inputPassword = '.i-input[type="password"]';
    this.buttonSubmit = '.i-popup__form-button[form="loginForm"]';
  }

  async login(email, password) {
    await baseElement.clickElement(this.loginWithEmail);
    await baseElement.inputText(this.inputEmail, email);
    await baseElement.inputText(this.inputPassword, password);
    await baseElement.clickElement(this.buttonSubmit);
  }
}

module.exports = { LoginPage };