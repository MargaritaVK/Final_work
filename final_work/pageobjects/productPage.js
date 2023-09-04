const { BasePage } = require('./basepage');
const baseElement = require('../helpers/baseelement');

class ProductPage extends BasePage {
  constructor() {
    super();
    this.productImage = '//*[contains(@class,"picture")]//*[@data-size="380x575"]//img';
    this.productName = '.b-product-title h1';
    this.addToCartButton = '.addtocart-btn';
    this.afterAddButton = '.second-button';
    this.commentsDate = '.b-comment__date';
    this.addCommentButton = '.b-comment-new__state-btn';
    this.commentContainer = '.b-comment-new__tab.b-comment-new__tab_review';
  }

  async addProductToCart() {
    await baseElement.clickElement(this.addToCartButton);
  }
}

module.exports = { ProductPage };