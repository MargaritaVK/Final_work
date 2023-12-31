const { BasePage } = require('./basepage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.shopLocations = '.main-nav__list__ul_last';
    this.mapPopupShops = '#navigationMap .b-map__cell.b-map__cell_menu';
    this.mapPopupTitle = '#navigationMap .b-map-select__title';
  }
}

module.exports = { MainPage };