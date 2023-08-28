const baseElement  = require('../helpers/baseelement');
const pageFactory  = require('../pageobjects/pageFactory');
const { Help } = require('../helpers/helpers');

describe('Functionality check on search page', () => {
  it('Check that the first search result contains "тармашев"', async () => {
    await pageFactory.basePage.navigate('https://oz.by/');
    await pageFactory.header.search('тармашев');
    const searchResult = await baseElement.getElementText(pageFactory.searchListPage.searchListItem);
    expect(searchResult.toLowerCase()).toContain('тармашев');
  });

  it('Check that sort goods by "Сначала дорогие"', async () => {
    const { expect } = require('chai');
    const firstSorting = await baseElement.getElementText(pageFactory.searchListPage.sorting);
    await pageFactory.searchListPage.sortingByPriceDesc();
    const secondSorting = await baseElement.getElementText(pageFactory.searchListPage.sorting);
    expect(firstSorting).to.not.equal(secondSorting);
  });

  it('Should filter search limits prices and check that the quantity of products has decreased', async () => {
    await pageFactory.searchListPage.setLimitsPriceFrame(60, 80);
    const searchResult = await baseElement.getElementText(pageFactory.searchListPage.searchListItem);
    expect(searchResult.toLowerCase()).toContain('тармашев' && '4');
  });

  it('Check that prices of filtered products is in right range', async () => {
    const searchPrices = await Help.getPriceWithoutCurrencySymbols(pageFactory.searchListPage.searchListPrices);
    const checkResult = await Help.isDataInTheGivenRange(searchPrices, 60, 80);
    expect(checkResult).toBe(true);
  });
});