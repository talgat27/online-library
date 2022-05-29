import * as actions from './actionTypes';

export const addBook = book => ({
  type: actions.ADD_BOOK,
  payload: book
});