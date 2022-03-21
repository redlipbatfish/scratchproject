import React from 'react';
import { connect } from 'react-redux';

const ToDoNumber = (props) => {
    const habit = props.habit;
    const percentage = Math.floor(100 * habit.status / habit.goal);

    function increment() {
        if (habit.status < habit.goal) {
            props.incrementNum(habit.habitId);
            console.log(habit.status, habit.goal);
        }
    }
    function decrement() {
        if (habit.status > 0) {
            props.decrementNum(habit.habitId);
        }
    }
    
    return (
        <div className='item-todo'>
            <div className='wrapper-habit-text'>
                <div className='habit-name habit-text'>{habit.habit}</div>
                <div className='habit-status habit-text'>{`${habit.status} / ${habit.goal}`}</div>
            </div>
            <div className='progress-container'>
                <div className='wrapper-progressbar'>
                    <div className='progressbar' style={{width: `${percentage}%`}}></div>
                </div>
                <div className='wrapper-btns'>
                    <div className='btn-progress minus' onClick={decrement}>-</div>
                    <div className='btn-progress plus' onClick={increment}>+</div>
                </div>
            </div>
        </div>
    );
};

export default ToDoNumber;


// <div className='wrapper-todo'>
//             <div className='item-done'>
//                 <div className='habit-name'>
//                     Stretch
//                 </div>
//                 <div className='progress-container'>
//                     <div className='wrapper-progressbar'>
//                         <div className='progressbar' style={{width: "100%"}}></div>
//                     </div>
//                     <div className='wrapper-btns'>
//                         <div className='btn-big-minus'>-</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='item-done'>
//                 <div className='habit-name'>
//                     Make bed
//                 </div>
//                 <div className='progress-container'>
//                     <div className='wrapper-progressbar'>
//                         <div className='progressbar' style={{width: "100%"}}></div>
//                     </div>
//                     <div className='wrapper-btns'>
//                         <div className='btn-big-minus'>-</div>
//                     </div>
//                 </div>
//             </div>
//         </div>