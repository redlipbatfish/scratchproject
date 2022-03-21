import React from 'react';
import { connect } from 'react-redux';


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
    if (!props.show) {
        return null;
    }
    const activeHabits = props.habits.habits;
    const activeHabitsArray = [];
    for (let key in activeHabits) {
        activeHabitsArray.push(activeHabits[key].habitId);
    }
    const availableHabits = [];
    const allHabits = props.habits.allHabits;
    for (let habit of allHabits) {
        if (activeHabitsArray.indexOf(habit.habitId) === -1) {
            availableHabits.push(habit);
        }
    }
    const habitsList = []
    for (let habit of availableHabits) {
        habitsList.push(
            // <option value={habit.habitId}>{habit.habit}</option>
            <option value={habit.habitId}>{habit.habit}</option>
        )
    }
    function closeModal () {
        props.hideModalAdd();
    }
    function addHabit () {
        console.log('hit');
    }
    const handleSelectChange = (e) => {
        console.log('hit');
    }
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                    <div className='modal-close' onClick={closeModal}>X</div>
                <div className='modal-content'>
                    <h3 className='modal-title'>Select a habit</h3>
                </div>
                <div className='modal-body'>
                    <select list='habits' className='habit-picker' name='habit-choice'>
                        { habitsList }
                    </select>
                    <div className='wrapper-editHabit hidden'>
                        <div className='edit-decrement'>-</div>
                        <input type='text' className='edit-field' value='1'></input>
                        <div className='edit-increment'>+</div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <div className="btn-save" onClick={addHabit}>
                        Add habit
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddHabit;