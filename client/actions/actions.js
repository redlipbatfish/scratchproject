import * as types from '../constants/actionTypes';

export const loginUserActionCreator = userId => ({
  type: types.LOGIN_USER,
  payload: userId,
});

export const logoutUserActionCreator = () => ({
  type: types.LOGOUT_USER,
});

export const createHabitActionCreator = habitId => ({
  type: types.CREATE_HABIT,
  payload: habitId,
});

export const deactivateHabitActionCreator = habitId => ({
  type: types.DEACTIVATE_HABIT,
  payload: habitId,
});

export const completeBoolHabitActionCreator = habitId => ({
  type: types.COMPLETE_BOOL_HABIT,
  payload: habitId,
});

export const uncompleteBoolHabitActionCreator = habitId => ({
  type: types.UNCOMPLETE_BOOL_HABIT,
  payload: habitId,
});

export const incrementNumHabitActionCreator = habitId => ({
  type: types.INCREMENT_NUM_HABIT,
  payload: habitId,
});

export const decrementNumHabitActionCreator = habitId => ({
  type: types.DECREMENT_NUM_HABIT,
  payload: habitId,
});