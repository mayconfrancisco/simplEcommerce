import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts() {
  try {
    const { current } = yield select(state => state.categories);
    const { data } = yield call(api.get, `/category_products/${current || ''}`);

    const productsCategory = current ? [data] : data;
    let onlyProducs = [];
    productsCategory.forEach((item) => {
      onlyProducs = onlyProducs.concat(item.products);
    });

    yield put(ProductsActions.getProductsSuccess(onlyProducs));
  } catch (err) {
    // TODO: Implementar fluxo de errors da API
    console.tron.log(err);
  }
}
