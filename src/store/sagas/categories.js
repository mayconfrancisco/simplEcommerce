import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* loadCategories() {
  try {
    const { data } = yield call(api.get, 'categories');

    yield put(CategoriesActions.getCategoriesSuccess(data));
  } catch (err) {
    // TODO: Implementar fluxo de errors da API
    console.tron.log(err);
  }
}
