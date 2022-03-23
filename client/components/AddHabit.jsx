import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useState } from 'react';

import './../styles/styles.scss'
import TargetSetter from './targetSetter.jsx';


const AddHabit = (props) => {
    // const state = props.habits;
    // const selectedHabit = document.getElementById('habits')
    // const selectedTarget = 

    // const reqOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         userId: userId,
    //         habitName: selectedHabit,
    //         targetNum: selectedTarget,
    //     })
    // }


    const [showSetter, setShowSetter] = useState(false)
    
    const [number, setNumber] = useState(null)

    if (!props.visible) {
        return null;
    }
    const activeHabits = props.activeHabits;
    const activeHabitsArray = []; // [1]
    for (let key in activeHabits) {
        activeHabitsArray.push(activeHabits[key].habitId);
    }

    

    const availableHabits = [];
    const allHabits = props.allHabits;
    for (let habit of allHabits) {


        // push to available habits if the id is not in active habits
        if (!activeHabitsArray.includes(habit.habitId)){
            availableHabits.push(habit)
        }


    }

    const habitsList = [] 
    for (let habit of availableHabits) {
        habitsList.push(
            // <option value={habit.habitId}>{habit.habit}</option>
            <option id='habitsOption' value={habit.isBoolean} boolean={habit.isBoolean}>{habit.habit}</option>
        )
    }
    function closeModal () {
        props.hideModalAdd();
    }
    function addHabit () {
        // send a fetch request to add the habit to the database of the user
             // expecting in post body
                // habit name
                // if type is number, a goal
                // user_id
        
        const habitInfo = {
            userId: props.userId,
            habitName: document.getElementById('habitsForm').innerText,
            targetNum: number
        }
    
        fetch('/editHabit/add',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(habitInfo)
        })

        //
        // { habit: 'Drink water',
        // habitId: 1,
        // type: 'number',
        // status: 1,
        // goal: 10,
        // completed: false }

   
    }
    const handleSelectChange = (e) => {
        console.log('hit');
    }

    
    

    function checkHabitBool () {
          
        if (document.getElementById('habitsForm').value === 'false') {
              setShowSetter(true)   
        }

        /// change numstate to null
       else setShowSetter(false);
    }
    

    
    
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                    <div className='modal-close' onClick={closeModal}>X</div>
                <div className='modal-content' >
                    <h3 className='modal-title'>Select a habit</h3>
                </div>
                <div className='modal-body'>
                    <select onChange={checkHabitBool} id='habitsForm' list='habits' className='habit-picker' name='habit-choice'>
                        { habitsList }
                    </select>
                        <TargetSetter show = {showSetter} number={setNumber}/>
                </div>
                <div className='modal-footer'>
                    <div id='test' className="btn-save" onClick={addHabit}>
                        Add habit
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddHabit;