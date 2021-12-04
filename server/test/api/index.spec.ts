import {
  expect,
} from 'chai';

import axios from 'axios';
import {
  SERVER_PORT,
  SERVER_URL,
} from '../../src/constants';

import fillDB from '../../src/utils/fillDB';
import DB from '../../src/models';

require('../../src/api');

const SERVER = `${SERVER_URL}:${SERVER_PORT}`;

suite('Testing Express API routes', () => {
  suiteSetup(async () => {
    await DB.connect();
    await fillDB.insertSaleRecords();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });

  suite('Sale Routes ', () => {
    test('should Get /api/sales/:productId return data correctly', async () => {
      const productId = '2021 BMW X1';
      const {
        data: response,
        status,
      } = await axios.get(`${SERVER}/api/sales/${productId}`);
      expect(response).to.be.an('array').that.has.length(3);
      expect(status).to.equal(200);
      expect(response[1].product_id).to.be.equal(productId);
    });

    test('should Get /api/sales/:productId handle invalid params', async () => {
      const {
        data: response,
        status,
      } = await axios.get(`${SERVER}/api/sales/${1}`, {
        validateStatus() {
          return true;
        },
      });
      expect(status).to.equal(400);
      expect(response.error).to.equal('Your product Id is invalid');
    });
  });
});
