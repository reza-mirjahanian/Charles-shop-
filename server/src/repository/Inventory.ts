import inventory from '../models/Inventory';
import Logger from '../utils/logger';

export default class Inventory {
  static async removeAll() {
    try {
      await inventory.deleteMany();
      Logger.log(` Inventory is cleaned at: ${new Date()}`);
      return true;
    } catch (e) {
      Logger.error('Repository:Inventory:removeAll()');
      throw Error((e as Error).message);
    }
  }

  static async find(product_id: string) {
    try {
      return inventory.findOne({
        product_id,
      }).lean();
    } catch (e) {
      Logger.error('Repository:Inventory:find()');
      throw Error((e as Error).message);
    }
  }

  static async create(
    product_id: string,
    SKU: number,
  ) {
    try {
      return await inventory.create({
        product_id,
        SKU,
      });
    } catch (e) {
      Logger.error('Repository:Inventory:create()');
      throw Error((e as Error).message);
    }
  }
}
