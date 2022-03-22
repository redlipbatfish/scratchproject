import React from 'react';
import { connect } from 'react-redux';
import CompletedHabit from '../components/CompletedHabit.jsx';

const Completed = (props) => {
    // console.log('completed props', props)
    const state = props.habits;
    const completedList = [];
    for (let habit of state.habits) {
        if (habit.completed === true) {
            if (habit.type === 'number') completedList.push(<CompletedHabit decrementNum={props.decrementNum} habit={habit}/>)
            if (habit.type === 'boolean') completedList.push(<CompletedHabit uncompleteBool={props.uncompleteBool} habit={habit}/>)
        }
    }

    const editHabit = () => {
        props.showModalEdit();
    }

    return (
        <div className='wrapper-todo' onClick={editHabit}>
            {completedList}
        </div>
    );
};

export default Completed;


{/* <div className='wrapper-todo'>
<div className='item-done'>
    <div className='habit-name'>
        Stretch
    </div>
    <div className='progress-container'>
        <div className='wrapper-progressbar'>
            <div className='progressbar' style={{width: "100%"}}></div>
        </div>
        <div className='wrapper-btns'>
            <div className='btn-big-minus'>-</div>
        </div>
    </div>
</div>
<div className='item-done'>
    <div className='habit-name'>
        Make bed
    </div>
    <div className='progress-container'>
        <div className='wrapper-progressbar'>
            <div className='progressbar' style={{width: "100%"}}></div>
        </div>
        <div className='wrapper-btns'>
            <div className='btn-big-minus'>-</div>
        </div>
    </div>
</div>
</div> */}