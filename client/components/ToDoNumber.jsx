import React from 'react';

const ToDoNumber = (props) => {
    const habit = props.habit;
    const percentage = 100 * (habit.status/habit.goal);

    function increment() {
        if (habit.status < habit.goal) {
            props.incrementNum(habit.habitId);
            //add PUT req to backend
        }
    }
    function decrement() {
        if (habit.status > 0) {
            props.decrementNum(habit.habitId);
            // add PUT req to backend
        }
    }
    const editHabit = () => {

        console.log('clicked')
        props.show(habit.habitId);
    }


    return (
        <div className='item-todo'>
            <div className='wrapper-habit-text'>
                <div className='habit-name habit-text'>{habit.habit}</div>
                <div className='numHabit-status habit-text'>{habit.status}/{habit.goal}</div>
                {/* <div className='habit-status habit-text'>{`${habit.status} / ${habit.goal}`}</div> */}
            </div>
            <div className='progress-container'>
                <div className='wrapper-progressbar' onClick={editHabit}>
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
