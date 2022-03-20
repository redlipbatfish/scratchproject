import React from 'react';
import { connect } from 'react-redux';


const EditHabit = () => {
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                <div className='modal-content'>
                    <h4 className='modal-title'>Edit habit</h4>
                </div>
                <div className='modal-body'>
                    Here is space to edit the habit.
                </div>
                <div className='modal-footer'>
                    <button>x</button>
                </div>
            </div>
        </div>
    )
};

export default EditHabit;