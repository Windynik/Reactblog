import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import ActiveBook from './reducer_active_books';

const rootReducer = combineReducers({
  books:booksReducer,
  ActiveBook:ActiveBook
});

export default rootReducer;
