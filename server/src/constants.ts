// const isTestMode = process.env.NODE_ENV === 'test';
const NODE_ENV = process.env.NODE_ENV || 'development';
const DBURL = process.env.DBURL || 'mongodb://localhost:27017';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';
const SERVER_PORT = process.env.SERVER_PORT || 30100;
const DB_NAME = process.env.DB_NAME || 'my_db_store';
const CORS_ORIGINS = [`${SERVER_URL}:${SERVER_PORT}`];

export {
  SERVER_PORT,
  SERVER_URL,
  CORS_ORIGINS,
  DB_NAME,
  NODE_ENV,
  DBURL,
};
