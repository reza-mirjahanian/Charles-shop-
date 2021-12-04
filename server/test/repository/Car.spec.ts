import {
  expect,
} from 'chai';

import Car from '../../src/repository/Car';
import DB from '../../src/models';

suite('Testing Car Repo', () => {
  suiteSetup(async () => {
    await DB.connect();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });

  setup(async () => {
    await Car.removeAll();
  });

  test('should insert a Car correctly ', async () => {
    const carModelId = 'BMW2002-t';
    const carName = 'BMW E';
    const price = 200;
    await Car.create(carModelId, carName, price);
    const newCar = await Car.find(carModelId);
    expect(newCar.carModelId).to.be.equal(carModelId);
    expect(newCar.carName).to.be.equal(carName);
    expect(newCar.price).to.be.equal(price);
  });
});
