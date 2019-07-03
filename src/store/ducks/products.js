import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Creators
 */
const { Types, Creators } = createActions({
  getProductsRequest: null,
  getProductsSuccess: ['data'],
  getProductsFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/**
 * Initial State
 */
const INITIAL_STATE = Immutable({
  data: [],
  loading: true,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
