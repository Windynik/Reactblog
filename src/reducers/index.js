import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';  //renaming the reducer property. cause the word reducer is too .. genearal.
import PostsReducer from './reducer_posts'


const rootReducer = combineReducers({
  posts:PostsReducer,
  form:formReducer
});

export default rootReducer;
