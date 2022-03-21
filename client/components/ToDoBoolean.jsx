import React from 'react';

const ToDoBoolean = (props) => {
    const habit = props.habit;
    const completion = habit.completed;

    function complete() {
        props.completeBool(habit.habitId);
        
    }
    
    const editHabit = () => {
        props.show();
    }

    return (
        <div className='item-todo'>
            <div className='wrapper-habit-text'>
                <div className='habit-name habit-text'>{habit.habit}</div>
                <div className='habit-status habit-text'>Incomplete</div>
            </div>
            <div className='progress-container'></div>
                <div className='wrapper-progressbar' onClick={editHabit}>
                    <div className='progressbar' style={{width: "0%"}}></div>
                </div>
                <div className='wrapper-btns'>
                    <div className='btn-check' onClick={complete}>	&#10003;</div>
                </div>
        </div>
    );
};

export default ToDoBoolean;
















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