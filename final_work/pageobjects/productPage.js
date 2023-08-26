const { BasePage } = require('./basepage');
const { BaseElement } = require('../helpers/baseelement');

const baseElement = new BaseElement();

class ProductPage extends BasePage {
  constructor() {
    super();
    this.productTitle = '.b-product-title';
    this.productName = '.b-product-title h1';
    this.addToCartButton = '.addtocart-btn';
    this.afterAddButton = '.second-button';
    this.comments = '.rm-review';
    this.commentsDate = '.b-comment__date';
    this.addCommentButton = '.b-comment-new__state-btn';
    this.commentContainer = '.b-comment-new__tab.b-comment-new__tab_review';
  }

  async addProductToCart() {
    await baseElement.clickElement(this.addToCartButton);
  }
}

module.exports = { ProductPage };