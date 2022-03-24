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
    let index = 0;

    for (let habit of availableHabits) {
        habitsList.push(
            // <option value={habit.habitId}>{habit.habit}</option>
            <option id='habitsOption' value={index} >{habit.habit}</option>
        )
        index +=1;
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
        
        const index = parseInt(document.getElementById('habitsForm').value)
        console.log(availableHabits[index].habit)
        const habitInfo = {
            userId: props.userId,
            habitName: availableHabits[index].habit,
            targetNum: number
        }
    
        fetch('/db/edithabit/add',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(habitInfo)
        })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            props.addHabit(data)
            // expecting this object
                    // { habit: 'Drink water',
                    // habitId: 1,
                    // type: 'number',
                    // status: 1,
                    // goal: 10,
                    // completed: false }
        })

        //props.hideModalAdd();

    // create 
    }
    const handleSelectChange = (e) => {
        console.log('hit');
    }
    
    // const [habitName, setHabitName] = useState(null)

    function checkHabitBool () {
        const index = parseInt(document.getElementById('habitsForm').value)
    
        if (availableHabits[index].isBoolean === false) {
              setShowSetter(true)   
        }

        /// change numstate to null
       else {
           setNumber(null);
           setShowSetter(false);
       }
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
                        <TargetSetter show = {showSetter} setNumber={setNumber} currNumber={number}/>
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