import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductsTypes } from '~/store/ducks/products';

import { loadCategories } from './categories';
import { loadProducts } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, loadCategories),
    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, loadProducts),
  ]);
}
