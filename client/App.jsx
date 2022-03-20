import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';


import FeedContainer from './containers/FeedContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';

const App = () => {

  return (
    <div>
      {/* <LoginContainer /> */}
      <FeedContainer />
    </div>
  );
};

export default App;