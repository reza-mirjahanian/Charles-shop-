import SaleModel from '../models/Sale';
import Logger from '../utils/logger';
import { SaleRecord } from '../types';

export default class Sale {
  static async removeAll() {
    try {
      await SaleModel.deleteMany();
      Logger.log(`All Sales is cleaned at: ${new Date()}`);
      return true;
    } catch (e) {
      Logger.error('Repository:Sale:removeAll()');
      return false;
    }
  }

  static async getAll() {
    try {
      return SaleModel.find()
        .lean();
    } catch (e) {
      Logger.error('Repository:Sale:getAll()');
      throw Error((e as Error).message);
    }
  }

  static async find(
    product_id: string,
  ) {
    try {
      return SaleModel.find({
        product_id,
      })
        .sort()
        .lean();
    } catch (e) {
      Logger.error('Repository:Sale:find()');
      throw Error((e as Error).message);
    }
  }

  static async create({
    product_id,
    customer_id,
    price,
    count,
    comment,
    extra,
  }: SaleRecord) {
    try {
      return await SaleModel.create({
        product_id,
        customer_id,
        price,
        count,
        comment,
        extra,
      });
    } catch (e) {
      Logger.error('Repository:Sale:create()');
      throw Error((e as Error).message);
    }
  }
}
