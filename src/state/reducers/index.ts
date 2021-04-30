import { combineReducers } from 'redux';

import reposReducer from './repositoriesReducer';

const reducers = combineReducers({
   repos: reposReducer
});

export default reducers;