import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import users from './users';

const rootReducer = combineReducers({
  user,
  flash,
  posts,
  users,
});

export default rootReducer;
