import React from 'react';
import { connect } from 'react-redux';

const CompletedHabit = (props) => {
    const habit = props.habit;
    const completion = habit.completed;
    const completedNum = <div className='btn-big-minus'>-</div>
    const completedBool = <div className='btn-big-minus' onClick={uncomplete}>x</div>

    function uncomplete() {
        props.uncompleteBool(habit.habitId);
    }

    return (
        <div className='item-done'>
            <div className='wrapper-habit-text'>
                <div className='habit-name habit-text'>{habit.habit}</div>
            </div>
            <div className='progress-container'>
                <div className='wrapper-progressbar'>
                    <div className='progressbar' style={{width: '100%'}}></div>
                </div>
                <div className='wrapper-btns'>
                   {habit.type === 'number' ? completedNum : completedBool}
                </div>
            </div>
        </div>
    );
};

export default CompletedHabit;