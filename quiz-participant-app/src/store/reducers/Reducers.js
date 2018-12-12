import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import app from './AppReducer';
import team from './TeamReducer';

const reducers = {
  form: formReducer,
  app,
  team
};

export default combineReducers(reducers);