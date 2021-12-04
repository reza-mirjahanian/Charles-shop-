import {
  expect,
} from 'chai';

import Sale from '../../src/repository/Sale';
import DB from '../../src/models';

import { SaleRecord } from '../../src/types';

suite('Testing Sale Repo', () => {
  suiteSetup(async () => {
    await DB.connect();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });

  setup(async () => {
    await Sale.removeAll();
  });

  test('should insert sale records correctly ', async () => {
    const productId = '2021 BMW X1';
    const customerId = 'reza@gmail';
    const price = 100000;
    const count = 1;
    const comment = 'Bla Bla Bla';
    const extra = { anything: 'you like' };
    await Promise.all([1, 2, 3].map((i) => Sale.create({
      product_id: `${productId}-${i}`,
      customer_id: `${customerId}-${i}`,
      price: price + i,
      count: count + i,
      comment: `${comment}-${i}`,
      extra,
    })));

    const record: SaleRecord[] = await Sale.getAll();

    expect(record).to.be.an('array').that.has.length(3);
    const found = record.find((item) => item.product_id === `${productId}-${2}`) as SaleRecord;
    expect(found.product_id).to.be.equal(`${productId}-${2}`);
    expect(found.customer_id).to.be.equal(`${customerId}-${2}`);
    expect(found.price).to.be.equal(100002);
    expect(found.count).to.be.equal(3);
  });

  test('should filter sales by product Id ', async () => {
    const productId1 = '2021 BMW X1';
    const productId2 = '2022 Mercedes-Benz X1';
    const customerId = 'reza@gmail';
    const price = 100000;
    const count = 1;
    const comment = 'Bla Bla Bla';
    const extra = { anything: 'you like' };
    // productId1
    await Promise.all([1, 2, 3].map((i) => Sale.create({
      product_id: `${productId1}`,
      customer_id: `${customerId}-${i}`,
      price: price + i,
      count: count + i,
      comment: `${comment}-${i}`,
      extra,
    })));
    // productId2
    await Promise.all([1, 2, 3].map((i) => Sale.create({
      product_id: `${productId2}`,
      customer_id: `${customerId}-${i}`,
      price: price + i,
      count: count + i,
      comment: `${comment}-${i}`,
      extra,
    })));

    const record: SaleRecord[] = await Sale.getAll();
    expect(record).to.be.an('array').that.has.length(6);
    const productId2Sales = await Sale.find(productId2);

    expect(productId2Sales).to.be.an('array').that.has.length(3);
    expect(productId2Sales[0].product_id).to.be.equal(productId2);
  });
});
