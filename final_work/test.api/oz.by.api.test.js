const axios = require('axios');
const validator = require('jsonschema');
const addCartSchema = require('./data/oz.by.api-v-1.json');

describe('API tests oz.by', () => {
  let response;
  before(async () => {
    response = await axios({
      method: 'get',
      url: 'https://oz.by/goods/ajax/html_box.php',
      params: {
        idGoods: '10677903',
        type: 'html',
      },
    });
  });

  it('GET request should be 200', async () => {
    expect(response.status).toEqual(200);
  });

  it('GET should be valid json schema', async () => {
    const validationResult = await validator.validate(response.data, addCartSchema);
    expect(validationResult.valid).toEqual(true);
  });

  it('GET response should contain "Товар успешно добавлен в корзину"', async () => {
    expect(response.data.message).toEqual('Товар успешно добавлен в корзину');
  });
});