import Sale from '../repository/Sale';

export default {
  insertSaleRecords: async () => {
    await Sale.removeAll();
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
  },
};
