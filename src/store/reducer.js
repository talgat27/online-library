import * as actions from './actionTypes';

const initialState = {
  books: [],
  wishList: []
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

    default:
      return state;
  }
}