import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();
    function logoutClick () {
        navigate('/');
    }


    return (
        <div className="topbar">
            <div id='logo'>H</div>
            <button id='add-hbt'><span id="plus-icon">+&nbsp;</span>&nbsp;Add habit</button>
            <div id='link-logout' onClick={logoutClick}>
                Logout
            </div>
        </div>
    );
};

export default TopBar;