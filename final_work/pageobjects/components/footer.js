const { BasePage } = require('../basepage');
const baseElement = require('../../helpers/baseelement');

class Footer extends BasePage {
  constructor() {
    super();
    this.SocialLink = async (socialLinkName) => {
      return `//a[@class = "footer-full__social-link" and contains(@href,"${socialLinkName}")]`;
  };
  }

  async goToSocialLink(socialLinkName) {
    const socialLink = await this.SocialLink(socialLinkName);
    await baseElement.clickElement(socialLink);
    const externalLink = await baseElement.getLink(socialLink, 'href');
    await browser.switchWindow(externalLink);
  }
}

module.exports = { Footer };