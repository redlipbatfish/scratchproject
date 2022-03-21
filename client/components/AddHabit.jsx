import React from 'react';
import { connect } from 'react-redux';


const AddHabit = () => {
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                <div className='modal-content'>
                    <h4 className='modal-title'>Add habit</h4>
                </div>
                <div className='modal-body'>
                    <input list='habits' name='habit-choice' />
                    <datalist id='habits'>
                        <option value='Drink water'>Drink water</option>
                        <option value='Make bed'>Make bed</option>
                        <option value='Walk dog'>Walk dog</option>
                        <option value='Sleep on time'>Sleep on time</option>
                        <option value='Stretch'>Stretch</option>
                    </datalist>
                </div>
                <div className='modal-footer'>
                    <button>x</button>
                </div>
            </div>
        </div>
    )
};

export default AddHabit;