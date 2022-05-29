import * as actions from './actionTypes';

const initialState = {
  books: []
};


export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    default:
      return state;
  }
}