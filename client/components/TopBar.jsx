import React from 'react';
import { connect } from 'react-redux';

const TopBar = () => {
    return (
        <div className="topbar">
            <div id='logo'>H</div>
            <button id='add-hbt'><span id="plus-icon">+&nbsp;</span>&nbsp;Add habit</button>
            <div id='link-logout'>Logout</div>
        </div>
    );
};

export default TopBar;