const baseElement  = require('../helpers/baseelement');
const pageFactory  = require('../pageobjects/pageFactory');

describe('Functionality check on product page', () => {
  before(async () => {
    await pageFactory.basePage.navigate('https://oz.by/');
    await baseElement.clickElement(pageFactory.header.headerAuthButton);
    await pageFactory.loginPage.login('qaautomationtest333@gmail.com', 'NfL2jm');
  });

  after(async () => {
    await pageFactory.basePage.navigate('https://oz.by/checkout/');
    await pageFactory.cartPage.clearAllCart();
  });

  it('Check that title text should contain correct product name', async () => {
    await pageFactory.header.search('Древний. Предыстория. Книга пятая');
    const pageTitle = await browser.getTitle();
    const productName = await baseElement.getElementText(pageFactory.productPage.productName);
    expect(pageTitle).toContain(productName);
  });

  it('Check that image is visible in product description', async () => {
    const elementImage = await $(pageFactory.productPage.productImage).isDisplayed();
    expect(elementImage).toBe(true);
  });

  it('Check that product is added to cart and the button is change description', async () => {
    await pageFactory.productPage.addProductToCart();
    const elementText = await baseElement.getElementText(pageFactory.productPage.afterAddButton);
    expect(elementText).toContain('Уже в корзине');
  });

  it('Check that comment form is visible after click button "Напишите отзыв"', async () => {
    await baseElement.clickElement(pageFactory.productPage.addCommentButton);
    const element = await $(pageFactory.productPage.commentContainer).isDisplayed();
    expect(element).toBe(true);
  });

  it('Check that first product comment should have a date', async () => {
    const commentsDate = await baseElement.getElementsArray(pageFactory.productPage.commentsDate);
    const commentDate = await baseElement.getTextFromElementsArray(commentsDate, 0);
    expect(commentDate).toContain('17 марта 2020');
  });
});