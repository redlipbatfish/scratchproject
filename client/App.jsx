import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';



import LoginContainer from './containers/LoginContainer.jsx';

const App = () => {

  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default App;