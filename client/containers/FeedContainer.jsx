import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TopBar from '../components/TopBar.jsx';
import Calendar from '../components/Calendar.jsx';
import ToDos from '../components/ToDos.jsx';
import Completed from '../components/Completed.jsx';
import AddHabit from '../components/AddHabit.jsx';
import EditHabit from '../components/EditHabit.jsx';
// import pie from Pie.js
import Pie from '../components/Pie.jsx';
import 'chart.js/auto'

import { useState } from 'react';




// TODO: add calendar
const mapStateToProps = state => ({
    showAddModal: state.habits.showModalAdd,
    showEditModal: state.habits.showModalEdit,
    activeHabits: state.habits.activeHabits,
    calendar: state.habits.calendar,
    allHabits: state.habits.allHabits,
    userId: state.habits.userId
})

const mapDispatchToProps = (dispatch) => {
    return {
        incrementNumHabit: (habitId) => dispatch(actions.incrementNumHabitActionCreator(habitId)),
        decrementNumHabit: (habitId) => dispatch(actions.decrementNumHabitActionCreator(habitId)),
        completeBoolHabit: (habitId) => dispatch(actions.completeBoolHabitActionCreator(habitId)),
        uncompleteBoolHabit: (habitId) => dispatch(actions.uncompleteBoolHabitActionCreator(habitId)),
        showModalAdd: (show) => dispatch(actions.showModalAddActionCreator(show)),
        hideModalAdd: (show) => dispatch(actions.hideModalAddActionCreator(show)),
        showModalEdit: (show) => dispatch(actions.showModalEditActionCreator(show)),
        hideModalEdit: (show) => dispatch(actions.hideModalEditActionCreator(show)),
        addHabit: (data) => dispatch(actions.addHabitActionCreate(data)),
        editActiveHabit: (data) => dispatch(actions.editActiveHabitActionCreator(data)),
        deactivateHabit: (data) => dispatch(actions.deactivateHabitActionCreator(data))
    }
};



class FeedContainer extends Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        // const [selectedHabit, setSelectedHabit] = useState({
        //     id: null,
        //     type: null,
        // });
        //console.log('calendar', this.props) 
         console.log('active habits', this.props.activeHabits)
        return(

            <div className='Main-Container'>

                <AddHabit 
                    visible = {this.props.showAddModal}
                    show={this.props.showModalAdd}
                    hideModalAdd={this.props.hideModalAdd} 
                    activeHabits={this.props.activeHabits}
                    allHabits={this.props.allHabits}
                    userId = {this.props.userId}
                    addHabit = {this.props.addHabit}
                    />
                <EditHabit 
                    hide={this.props.hideModalEdit}
                    show={this.props.showEditModal} 
                    habits={this.props.activeHabits}
                    userId = {this.props.userId} 
                    editHabit = {this.props.editActiveHabit}
                    deactivateHabit = {this.props.deactivateHabit}                 
                    />
                <TopBar 
                    showModalAdd={this.props.showModalAdd}/>
                <Calendar 
                    calendarData={this.props.calendar}/>
                <ToDos 
                    show={this.props.showModalEdit} 
                    completeBool={this.props.completeBoolHabit} 
                    incrementNum={this.props.incrementNumHabit} 
                    decrementNum={this.props.decrementNumHabit} 
                    activeHabits={this.props.activeHabits}
                    showModalAdd={this.props.showModalAdd}
                    
                    />
                    {/* pie graph element */}
                    <Pie/>
                 <Completed 
                    showModalEdit={this.props.showModalEdit} 
                    uncompleteBool={this.props.uncompleteBoolHabit} 
                    decrementNum={this.props.decrementNumHabit} 
                    activeHabits={this.props.activeHabits}  
                    /> 
            </div>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (FeedContainer);