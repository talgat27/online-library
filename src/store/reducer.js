import * as actions from './actionTypes';
import { v4 as uuid } from 'uuid';

const initialState = {
  books: [],
  wishListBooks: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    case actions.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(b => action.payload.id !== b.id)
      };

    case actions.ADD_BOOK_TO_WL:
      return {
        ...state,
        wishListBooks: [...state.wishListBooks, action.payload]
      };

    case actions.REMOVE_BOOK_FROM_WL:
      return {
        ...state,
        wishListBooks: state.wishListBooks.filter(b => action.payload.id !== b.id)
      };


    default:
      return state;
  }
}