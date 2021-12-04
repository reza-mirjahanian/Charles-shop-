import express from 'express';
import Sale from '../repository/Sale';
import Logger from '../utils/logger';
import validateGetParams from '../middlewares/sale/find.validator';

const router = express.Router();

router.get('/api/sales/:productId', validateGetParams, async (req, res) => {
  try {
    const {
      productId,
    } = req.params;
    const data = await Sale.find(
      productId,
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    Logger.error(req.path);
    res.status(500).send({
      error: 'Server Error',
    });
  }
});
export default router;
