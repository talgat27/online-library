import * as actions from './actionTypes';

export const addBook = book => ({
  type: actions.ADD_BOOK,
  payload: book
});

export const removeBook = id => ({
  type: actions.REMOVE_BOOK,
  payload: { id }
});

export const updateBook = (id, updatedBook) => ({
  type: actions.UPDATE_BOOK,
  payload: { id, updatedBook }
});

export const addBookToWL = book => ({
  type: actions.ADD_BOOK_TO_WL,
  payload: book
});

export const removeBookFromWL = id => ({
  type: actions.REMOVE_BOOK_FROM_WL,
  payload: { id }
});

