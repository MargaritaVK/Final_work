const { BasePage } = require('../basepage');
const baseElement = require('../../helpers/baseelement');

class Footer extends BasePage {
  constructor() {
    super();
    this.socialLinkFacebook = "//*[@class='footer-full__social-list']/a[3]";
  }

  async goToSocialLink() {
    await baseElement.clickElement(this.socialLinkFacebook);
    await browser.switchWindow('https://www.facebook.com/www.oz.by/wall/');
  }
}

module.exports = { Footer };