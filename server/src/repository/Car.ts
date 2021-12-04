import carModel from '../models/Car';
import Logger from '../utils/logger';

export default class Car {
  static async removeAll() {
    try {
      await carModel.deleteMany();
      Logger.log(`All Car is cleaned at: ${new Date()}`);
      return true;
    } catch (e) {
      console.log(e);
      Logger.error('Repository:Car:removeAll()');
      return false;
    }
  }

  static async create(carModelId: string, carName: string, price: number) {
    try {
      return await carModel.create({
        carModelId,
        carName,
        price,
      });
    } catch (e) {
      Logger.error('Repository:Car:create()');
      throw Error((e as Error).message);
    }
  }

  static async find(carModelId: string) {
    try {
      return carModel.findOne({
        carModelId,
      }).lean();
    } catch (e) {
      Logger.error('Repository:car:find()');
      throw Error((e as Error).message);
    }
  }
}
