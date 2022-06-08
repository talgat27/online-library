import * as actions from './actionTypes';
import { v4 as uuid } from 'uuid';

const initialState = {
  books: [
    {
      id: uuid(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      genre: 'classics',
      image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1992/9780199232086.jpg'
    },
    {
      id: uuid(),
      title: ' Madame Bovary',
      author: 'Gustave Flaubert',
      genre: 'classics',
      image: 'https://cdn1.booknode.com/book_cover/1455/full/madame-bovary-1454940.jpg'
    }
  ],
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

    case actions.UPDATE_BOOK:
      const updatedBooks = []
      state.books.map(b => {
        if (b.id === action.payload.id) {
          updatedBooks.push(action.payload.updatedBook)
        } else {
          updatedBooks.push(b)
        }
      })

      return {
        ...state, books: updatedBooks
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