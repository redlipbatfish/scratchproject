import React from 'react';
import { connect } from 'react-redux';


const EditHabit = () => {
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                <div className='modal-content'>
                    <h4 className='modal-title'>Drink water</h4>
                </div>
                <div className='modal-body'>
                    <div className='wrapper-editHabit'>
                        <div className='edit-decrement'>-</div>
                        <input type='text' className='edit-field'></input>
                        <div className='edit-increment'>+</div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button>x</button>
                </div>
            </div>
        </div>
    )
};

export default EditHabit;