const { BasePage } = require('./basepage');
const baseElement = require('../helpers/baseelement');

class SearchListPage extends BasePage {
  constructor() {
    super();
    this.searchListItem = '.breadcrumbs__list__li.active';
    this.searchListPrices = '.item-type-card__btn';
    this.filterSearchByPriceStart = '#inp1_r_cost';
    this.filterSearchByPriceFinish = '#inp2_r_cost';
    this.filterButtom = '.filters__searchbtn__btn';
    this.sorting = '.top-filters__eselect.top-filters__eselect_alltypes';
    this.sortingPriceDesc = '.top-filters__eselect.top-filters__eselect_alltypes li:nth-child(4)';
  }

  async setLimitsPriceFrame(minPrice, maxPrice) {
    await baseElement.inputText(this.filterSearchByPriceStart, minPrice);
    await baseElement.inputText(this.filterSearchByPriceFinish, maxPrice);
    await baseElement.clickElement(this.filterButtom);
  }

  async sortingByPriceDesc() {
    await baseElement.clickElement(this.sorting);
    await baseElement.clickElement(this.sortingPriceDesc);
  }
}

module.exports = { SearchListPage };