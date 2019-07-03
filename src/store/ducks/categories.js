import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Creators
 */
const { Types, Creators } = createActions({
  getCategoriesRequest: null,
  getCategoriesSuccess: ['data'],
  getCategoriesFailure: null,
  setCurrentCategory: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: [],
  current: null,
  loading: true,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_SUCCESS]: (state, action) => state.merge({
    data: action.data,
    loading: false,
  }),
  [Types.SET_CURRENT_CATEGORY]: (state, { id }) => state.merge({ current: id }),
});
