const { BasePage } = require('./basepage');
const baseElement = require('../helpers/baseelement');

class CartPage extends BasePage {
  constructor() {
    super();
    this.checkBoxSelectAll = '.i-checkbox__real.checkAll';
    this.removeButton = '.i-button_small.remove';
    this.confirmRemoveButton = '.i-button_small.remove-yes';
  }

  async clearAllCart() {
    await baseElement.checkBox(this.checkBoxSelectAll);
    await baseElement.clickElement(this.removeButton);
    await baseElement.clickElement(this.confirmRemoveButton);
  }
}

module.exports = { CartPage };