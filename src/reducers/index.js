import { combineReducers } from 'redux';
import logReducers from './logReducers';
import techReducer from './techReducers';
export default combineReducers({
  log: logReducers,
  tech: techReducer,
});
