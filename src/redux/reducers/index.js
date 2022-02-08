import { combineReducers } from 'redux';

import filters from './filters';
import clocks from './clocks';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  clocks,
  cart,
});

export default rootReducer;
