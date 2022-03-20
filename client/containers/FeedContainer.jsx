import React from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar.jsx';
import Calendar from '../components/Calendar.jsx';
import ToDo from '../components/ToDo.jsx';
import Completed from '../components/Completed.jsx';
import AddHabit from '../components/AddHabit.jsx';
import EditHabit from '../components/EditHabit.jsx'

const FeedContainer = () => {
    return (
    <div>
        <EditHabit />
        <TopBar/>
        <Calendar/>
        <ToDo/>
        <Completed/>
    </div>
    );
};

export default FeedContainer;