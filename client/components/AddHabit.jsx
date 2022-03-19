import React from 'react';
import { connect } from 'react-redux';

const AddHabit = () => {
    return (
        <div className='modal'>    
            <div className='modal-content'>
                <h4 className='modal-title'>Add habit</h4>
            </div>
            <div className='modal-body'>
                Here is space to add the habit.
            </div>
            <div className='modal-footer'>
                <button>x</button>
            </div>
        </div>
    )
};

export default AddHabit;