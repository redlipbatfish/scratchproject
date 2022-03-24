import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';


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
    if (!props.show.show) {
        return null;
    }

    const [count, setCount] = useState(1);

    const closeModal = () => {
        props.hide();
    }

    const deleteHabit = () => {
        const habitInfo = {
            userId: props.userId,
            habitId: props.show.habitId
        }
        // send fetch req to delete habit from user's active habits
        fetch('/db/edithabit/delete', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(habitInfo)
        })
        // close modal
        props.deactivateHabit(props.show.habitId);
        props.hide();
    }

    const updateHabit = () => {
        
        const updateInfo = {
            userId : props.userId,
            habitId: props.show.habitId,
            newTarget: count
        }

        props.editHabit(updateInfo);
        fetch('/db/edithabit/update',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateInfo)
        })
        .then(data => data.json())
        .then(data => {

        // update state to change the goal for updated habit
        console.log('edited database')
 
        })
        
        props.hide();   
    }

    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 1 ){
            setCount(count - 1);
        }
    }

    const habitPairs = {
        1: 'Drink water',
        2: 'Make bed',
        3: 'Walk dog',
        4: 'Sleep on time',
        5: 'Stretch'
      };
      


      // only render increment/decrement div if the habit has not a boolean


    //console.log('this is what we are trying to edit',props.show.habitId )
    return (
        <div className='modal-bg'>  
            <div className='modal'>
                    <div className='modal-close' onClick={closeModal}>X</div>
                <div className='modal-content'></div>
                    <h3 className='modal-title'>{habitPairs[props.show.habitId]}</h3>
               
                <div className='modal-body'>
                    <div className='wrapper-editHabit'>
                        <button className='edit-increment' onClick={decrement}>-</button>
                        
                        <div className='edit-field'>{count}</div>
                        <button className='edit-decrement' onClick={increment}>+</button>
                      
                    </div>
                </div>
                <div className='modal-footer'>
                    <button className="btn-save" onClick={updateHabit}>Update</button>
                    {/* <div className="btn-save">
                        Update
                    </div> */}
                    <button className="btn-save" onClick={deleteHabit} >Delete habit</button>
                    {/* <div className="link-delete">
                        Delete habit
                    </div> */}
                </div>
        </div>
        </div>
    )
};

export default EditHabit;