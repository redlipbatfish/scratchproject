import React from 'react';
import { connect } from 'react-redux';
import ToDoNumber from '../components/ToDoNumber.jsx';
import ToDoBoolean from '../components/ToDoBoolean.jsx';

import './../styles/styles.scss'

const ToDos = (props) => {

    const todayHabit = props.todayHabit;
    const todoList = [];

    for (let habit of todayHabit) {
        console.log(habit);
        // check if status of habit is not 1
        if (habit[3] !== 1) {
            // check if type of habit is not null
            if (habit[2] !== null) todoList.push(<ToDoNumber show={props.show} incrementNum={props.incrementNum} decrementNum={props.decrementNum} habit={habit} />)
            else todoList.push(<ToDoBoolean show={props.show} completeBool={props.completeBool} habit={habit} />)
        }
    }
    
    function addHabit () {
        props.showModalAdd();
    }

    return (
        <div className='wrapper-todo'>
            {/* <div id='addHabitButton'>
                <button id='add-hbt' onClick={addHabit}><span id="plus-icon">+&nbsp;</span>&nbsp;Ad habit</button>
            </div> */}
            <div>
                {todoList} 
            </div>
        </div>
    );
};

export default ToDos;

//       <button id='add-hbt' onClick={addHabit}><span id="plus-icon">+&nbsp;</span>&nbsp;Add habit</button>

{/* <div className='item-todo'>
                <div className='habit-name'>
                    Drink water
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "60%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-progress minus'>-</div>
                        <div className='btn-progress plus'>+</div>
                    </div>
                </div>
            </div>
            <div className='item-todo'>
                <div className='habit-name'>
                    Walk dog
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "20%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-progress minus'>-</div>
                        <div className='btn-progress plus'>+</div>
                    </div>
                </div>
            </div>
            <div className='item-todo'>
                <div className='habit-name'>
                    Sleep on time
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "0%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-check'>	&#10003;</div>
                    </div>
                </div>
            </div> */}