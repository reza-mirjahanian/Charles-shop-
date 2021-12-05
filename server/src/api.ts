import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import {
  SERVER_PORT,
  SERVER_URL,
} from './constants';

import saleRoute from './routes/sale.router';
import DB from './models';
import Logger from './utils/logger';

DB.connect().then(() => {
  Logger.log('DB Connected!');
});

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(saleRoute);

app.listen(SERVER_PORT, () => console.log(`✅  Ready on  ${SERVER_URL}:${SERVER_PORT}`));
