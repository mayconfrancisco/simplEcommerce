import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as products } from './products';
import { reducer as basket } from './basket';

export default combineReducers({
  categories,
  products,
  basket,
});
