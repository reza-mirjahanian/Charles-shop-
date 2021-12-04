import './api';
import fillDB from './utils/fillDB';

fillDB.insertSaleRecords().then(() => console.log('Fake data inserted!'));

// Caught other errors
process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
      reason,
      p,
    });
  })
  .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
      err,
    });
  });
