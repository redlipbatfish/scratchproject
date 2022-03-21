import * as types from '../constants/actionTypes';

const initialState = {
  userId: null,
  habits: [
    { habit: 'Drink water',
      habitId: 1,
      type: 'number',
      status: 1,
      goal: 10,
      completed: false },

    { habit: 'Make bed',
      habitId: 2,
      type: 'boolean',
      completed: true },

    { habit: 'Walk dog',
      habitId: 3,
      type: 'number',
      status: 5,
      goal: 5,
      completed: true},

    { habit: 'Sleep on time',
      habitId: 4,
      type: 'boolean',
      completed: false },

    { habit: 'Stretch',
      habitId: 5,
      type: 'number',
      status: 4,
      goal: 5,
      completed: false }
  ],
  calendar: []
}

const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER: {

    }

    case types.COMPLETE_BOOL_HABIT: {
      const habits = [];
      for (let i = 0; i < state.habits.length; i++) {
        habits.push({...state.habits[i]});
        if (habits[i].habitId === action.payload ) {
          habits[i].completed = true;
        }
      }

      return {
        ...state,
        habits
      };
    }

    case types.UNCOMPLETE_BOOL_HABIT: {
      const habits = [];
      for (let i = 0; i < state.habits.length; i++) {
        habits.push({...state.habits[i]});

        if (habits[i].habitId === action.payload ) {
          habits[i].completed = false;
        }
      }

      return {
        ...state,
        habits
      };
    }

    case types.INCREMENT_NUM_HABIT: {
      const habits = [];
      for (let i = 0; i < state.habits.length; i++) {
        habits.push({...state.habits[i]});

        // increment the status for the target habit, if this completes habit change to completed
        if (habits[i].habitId === action.payload ) {
          if (habits[i].status >= habits[i].goal) habits[i].completed = true;
          if (habits[i].status ) ++habits[i].status;
        }
      }

      return {
        ...state,
        habits
      };
    }

    case types.DECREMENT_NUM_HABIT: {
      const habits = [];
      for (let i = 0; i < state.habits.length; i++) {
        habits.push({...state.habits[i]});

        if (habits[i].habitId === action.payload ) {
          if (habits[i].completed === true) habits[i].completed = false;
          if (habits[i].status > 0) habits[i].status--;
        }
      }


      return {
        ...state,
        habits
      };
    }

    default: {
      return state;
    }
  }
}

export default habitsReducer;


// case types.ADD_CARD: {
//   const totalCards = state.totalCards + 1;
//   // make a deep copy of marketList called newMarketList
//   const marketList = [];
//   for (let i = 0; i < state.marketList.length; i++ ) {
//     const newObj = {...state.marketList[i]};
//     marketList.push(newObj);
   
//     if (marketList[i].marketId === action.payload) {
//       marketList[i].cards += 1;
//     }
//   }

//   for (let i = 0; i < state.marketList.length; i++){
//     marketList[i].perOfTot = (marketList[i].cards / totalCards) * 100 || 0;
//   }
//   // find the index of the element that contains the ID of our action payload
//   // update the totalCards at the specified elements marketID
//   return {
//     ...state,
//     marketList,
//     totalCards,
//   };