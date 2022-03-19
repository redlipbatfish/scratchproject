import * as types from '../constants/actionTypes';

const initialState = {
  userId: null,
  habits: {},
  calendar: []
}

const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER: {

    }

    default: {
      return state;
    }
  }
}

export default habitsReducer;

