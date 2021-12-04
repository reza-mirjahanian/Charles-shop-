import {
  expect,
} from 'chai';

import Inventory from '../../src/repository/Inventory';
import DB from '../../src/models';

suite('Testing Inventory Repo', () => {
  suiteSetup(async () => {
    await DB.connect();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });

  setup(async () => {
    await Inventory.removeAll();
  });

  test('should Insert a Car correctly ', async () => {
    const carModelId = 'BMW2002-t';
    const SKU = 200;
    await Inventory.create(carModelId, SKU);
    const record = await Inventory.find(carModelId);

    expect(record.product_id).to.be.equal(carModelId);
    expect(record.SKU).to.be.equal(SKU);
  });
});
