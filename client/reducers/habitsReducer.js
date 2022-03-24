import * as types from '../constants/actionTypes';
// activeHabits
const initialState = {
  userId: null,
  activeHabits: [
    { habit: 'Drink water',
      habitId: 1,
      type: 'number',
      status: 0,
      goal: 10,
      completed: false }
  ],

  calendar: [],
  showModalAdd: false,
  showModalEdit: {
    show: false,
    habitId : null
  },
  allHabits: [
    {
      habit: "Drink water",
      habitId: 1,
      isBoolean: false,
    },
    {
      habit: "Make bed",
      habitId: 2,
      isBoolean: true
    },
    {
      habit: "Walk dog",
      habitId: 3,
      isBoolean: false
    },
    {
      habit: "Sleep on time",
      habitId: 4,
      isBoolean: true
    },
    {
      habit: "Stretch",
      habitId: 5,
      isBoolean: false
    },
  ]
}

const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    // activeHabits: [
    //   { habit: 'Drink water',
    //     habitId: 1,
    //     type: 'number',
    //     status: 0,
    //     goal: 10,
    //     completed: false }
    // ],
    
    case types.DEACTIVATE_HABIT: {
      console.log('inside deactive habit')
      const newActiveHabits = [];
      // traverse through activeHabits
      for (let i = 0; i < state.activeHabits.length; i++) {
        // if current object has property of habitId
        if (state.activeHabits[i]['habitId'] !== action.payload) {
          newActiveHabits.push(state.activeHabits[i])
        }
      }

      console.log('newactive habits-',newActiveHabits)
      return {
        ...state,
        activeHabits: newActiveHabits
      }
    }
    
   
    case types.EDIT_HABIT:{
      
     // copy active habits
      const updatedHabits = [];
      for(const habit of state.activeHabits){

        // find the habit where the habit id is == to payload.habitId
        if(habit.habitId === action.payload.habitId){

          // change the completed status if the new goal is >= the current status, reassign status to new target 
            if(habit.status >= action.payload.newTarget){
              habit.completed = true;
              habit.status = action.payload.newTarget;
            }

            // update the goal for that habit
            habit.goal = action.payload.newTarget;
        }

        updatedHabits.push(habit)
      }


      return{
        ...state,
        activeHabits: updatedHabits
      }

    }
    case types.ADD_HABIT: {

      // deep copy current active habits and push the new habit to that copy
      const newHabits = JSON.parse(JSON.stringify(state.activeHabits))
      newHabits.push(action.payload)

      // return the updated habits
      return{
        ...state,
        activeHabits: newHabits
      }

    }
    case types.LOGIN_USER: {
      
    }

    case types.GET_FEED: {
      const { calendar, activeHabits, userId } = action.payload;
      console.log('incoming active habits',activeHabits)

      const newState = { ...state, calendar, activeHabits, userId }
      console.log('below is new state');
      console.log(newState);
      return newState;
    }

    case types.COMPLETE_BOOL_HABIT: {
      const activeHabits = [];
      for (let i = 0; i < state.activeHabits.length; i++) {
        activeHabits.push(state.activeHabits[i]);
        if (activeHabits[i].habitId === action.payload ) {
          activeHabits[i].completed = true;
        }
        
      }

      return {
        ...state,
        activeHabits
      };
    }

    case types.UNCOMPLETE_BOOL_HABIT: {
      const activeHabits = [];
      for (let i = 0; i < state.activeHabits.length; i++) {
        habits.push({...state.activeHabits[i]});

        if (activeHabits[i].habitId === action.payload ) {
          activeHabits[i].completed = false;
        }
      }
      return {
        ...state,
        activeHabits
      };
    }

    case types.INCREMENT_NUM_HABIT: {
      //console.log(state.activeHabits)
      const habits = [];
      for (let i = 0; i < state.activeHabits.length; i++) {
        habits.push({...state.activeHabits[i]});
  
        // increment the status for the target habit, if this completes habit change to completed
        if (habits[i].habitId === action.payload ) {
 
          habits[i].status += 1;
          if (habits[i].status === habits[i].goal) habits[i].completed = true;
        }
      }

      return {
        ...state,
        activeHabits : habits,
      };
    }

    case types.DECREMENT_NUM_HABIT: {
      const habits = [];
      for (let i = 0; i < state.activeHabits.length; i++) {
        habits.push({...state.activeHabits[i]});

        if (habits[i].habitId === action.payload ) {
          if (habits[i].completed === true) habits[i].completed = false;
          if (habits[i].status > 0) habits[i].status--;
        }
      }
        return {
          ...state,
          activeHabits : habits,
        };
      }
      
    case types.SHOW_MODAL_ADD: {
      let showModalAdd = true;

      return {
        ...state,
        showModalAdd
      }
    }
    case types.HIDE_MODAL_ADD: {
      let showModalAdd = false;
      
      return {
        ...state,
        showModalAdd
      }
    }
    case types.SHOW_MODAL_EDIT: {
      const show = {
        show: true,
        habitId: action.payload
      }
      
      return {
        ...state,
        showModalEdit : show,
      }
    }
    case types.HIDE_MODAL_EDIT: {
      const hide = {
        show: false,
        habitId: null
      }
      
      return {
        ...state,
        showModalEdit : hide
      }
    }
    default: {
      return state;
    }
  }
}

export default habitsReducer;