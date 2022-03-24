import React from 'react';
import { connect } from 'react-redux';
import CompletedHabit from '../components/CompletedHabit.jsx';

const Completed = (props) => {
    // console.log('completed props', props)
    const activeHabits = props.activeHabits;
    const completedList = [];
    for (let habit of activeHabits) {
        if (habit.completed === true) {
            if (habit.type === 'number') completedList.push(<CompletedHabit decrementNum={props.decrementNum} habit={habit} />)
            if (habit.type === 'boolean') completedList.push(<CompletedHabit uncompleteBool={props.uncompleteBool} habit={habit} />)
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

