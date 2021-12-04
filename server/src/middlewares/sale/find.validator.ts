import {
  Validator,
} from 'node-input-validator';
import * as express from 'express';

export default async (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const {
    productId,
  } = req.params;
  const v = new Validator({
    productId,
  }, {
    productId: 'required|string|minLength:3',
  });

  if (await v.fails()) {
    res.status(400).send({
      error: 'Your product Id is invalid',
    });
  } else {
    next();
  }
};
