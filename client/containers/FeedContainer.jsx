import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TopBar from '../components/TopBar.jsx';
import Calendar from '../components/Calendar.jsx';
import ToDos from '../components/ToDos.jsx';
import Completed from '../components/Completed.jsx';
import AddHabit from '../components/AddHabit.jsx';
import EditHabit from '../components/EditHabit.jsx';

// TODO: add calendar
const mapStateToProps = state => ({
    habits: state.habits
})

const mapDispatchToProps = (dispatch) => {
    return {
        incrementNumHabit: (habitId) => dispatch(actions.incrementNumHabitActionCreator(habitId)),
        decrementNumHabit: (habitId) => dispatch(actions.decrementNumHabitActionCreator(habitId)),
        completeBoolHabit: (habitId) => dispatch(actions.completeBoolHabitActionCreator(habitId)),
        uncompleteBoolHabit: (habitId) => dispatch(actions.uncompleteBoolHabitActionCreator(habitId))
    }
};


class FeedContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                {/* <EditHabit /> */}
                <TopBar/>
                <Calendar/>
                <ToDos completeBool={this.props.completeBoolHabit} incrementNum={this.props.incrementNumHabit} decrementNum={this.props.decrementNumHabit} habits={this.props.habits}/>
                <Completed uncompleteBool={this.props.uncompleteBoolHabit} decrementNum={this.props.decrementNumHabit} habits={this.props.habits}/>
            </div>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (FeedContainer);