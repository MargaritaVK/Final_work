class BaseElement {
  async clickElement(selector) {
    await $(selector).waitForClickable();
    await $(selector).click();
  }

  async checkBox(selector) {
    await $(selector).scrollIntoView();
    await $(selector).click();
  }

  async getTextFromElementsArray(webElements, number) {
    return webElements[number].getText();
  }

  async getElementText(selector) {
    await $(selector).waitForDisplayed();
    return $(selector).getText();
  }

  async inputText(selector, text) {
    await $(selector).waitForClickable();
    await $(selector).setValue(text);
  }

  async getElementsArray(selector) {
    return $$(selector);
  }

  async getProperty(selector, property) {
    return $(selector).getCSSProperty(property);
  }

  async getLink (selector, property) {
    return $(selector).getProperty(property);
  }

  async getDropDown(selector, selectorDrop) {
    await $(selector).moveTo();
    await $(selectorDrop).waitForDisplayed();
  }
}

module.exports = new BaseElement();