import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions
 */
const { Types, Creators } = createActions({
  addProduct: ['product'],
  setQuantity: ['quantity'],
  removeProduct: ['id'],
});

export const BasketTypes = Types;
export default Creators;

/**
 * Initial State
 */
const INITIAL_STATE = Immutable({
  products: [],
  total: 0,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: (state, { product }) => {
    const exist = state.products.find(prd => prd.id === product.id);
    if (exist) {
      return state.merge({
        products: [
          ...state.products.filter(prd => prd.id !== exist.id),
          { ...exist, quantity: exist.quantity + 1 },
        ],
        total: state.total + product.price,
      });
    }
    return state.merge({
      products: [...state.products, { ...product, quantity: 1 }],
      total: state.total + product.price,
    });
  },
});
