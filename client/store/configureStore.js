/* eslint-disable global-require */
import PRODUCTION from '../../src/common/utils/production';

if (PRODUCTION) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
