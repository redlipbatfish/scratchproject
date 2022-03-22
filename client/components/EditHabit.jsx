import React from 'react';
import { connect } from 'react-redux';


const EditHabit = (props) => {
    // const reqOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         userId: userId,
    //         habitName: state.habit,
    //         newNum: habit.goal,
    //     })
    // }
    // function incrementTarget() {
    //     if (habit.goal) {
    //         habit.goal += 1;
    //         //PUT request to backend
    //         // fetch('http://localhost:3000/edithabit/update', reqOptions).then(response => response.json()).then(data => console.log(data))
    //     }
    // }
    // function decrementTarget() {
    //     if (habit.goal) {
    //         habit.goal -=1;
    //          //PUT request to backend
    //         // fetch('http://localhost:3000/edithabit/update', reqOptions).then(response => response.json()).then(data => console.log(data))
    //     }
    // }
    if (!props.show) {
        return null;
    }

    const closeModal = () => {
        props.show();
    }
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                    <div className='modal-close' onClick={closeModal}>X</div>
                <div className='modal-content'></div>
                    <h3 className='modal-title'>Drink water</h3>
                </div>
                <div className='modal-body'>
                    <div className='wrapper-editHabit'>
                        <div className='edit-decrement'>-</div>
                        <input type='text' className='edit-field'></input>
                        <div className='edit-increment'>+</div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <div className="btn-save">
                        Update
                    </div>
                    <div className="link-delete">
                        Delete habit
                    </div>
                </div>
        </div>
    )
};

export default EditHabit;