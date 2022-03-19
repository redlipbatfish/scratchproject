import { combineReducers } from 'redux';

import habitsReducer from './habitsReducer';

const reducers = combineReducers({
  habits: habitsReducer,
})

export default reducers;