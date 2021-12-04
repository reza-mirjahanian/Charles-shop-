// @todo use better Logger
export default {
  log: (message = '') => {
    console.error(`#Log: ${message}`);
  },
  error: (message = 'Error!') => {
    console.error(`#Error: ${message}`);
  },
};
