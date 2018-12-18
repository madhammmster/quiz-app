import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import app from './AppReducer';
import teams from './TeamsReducer';

const reducers = {
  form: formReducer,
  app,
  teams
};

export default combineReducers(reducers);