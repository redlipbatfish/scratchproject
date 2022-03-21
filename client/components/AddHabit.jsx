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

    return (
        <div className='modal-bg'>  
            <div className='modal'>
                    <div className='modal-close'>X</div>
                <div className='modal-content'>
                    <h3 className='modal-title'>Select a habit</h3>
                </div>
                <div className='modal-body'>
                    <input list='habits' className='habit-picker' name='habit-choice' />
                    <datalist id='habits'>
                        <option value='Drink water'>Drink water</option>
                        <option value='Make bed'>Make bed</option>
                        <option value='Walk dog'>Walk dog</option>
                        <option value='Sleep on time'>Sleep on time</option>
                        <option value='Stretch'>Stretch</option>
                    </datalist>
                    <div className='wrapper-editHabit'>
                        <div className='edit-decrement'>-</div>
                        <input type='text' className='edit-field'></input>
                        <div className='edit-increment'>+</div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <div className="btn-save">
                        Add habit
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddHabit;