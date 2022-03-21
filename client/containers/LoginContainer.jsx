import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm.jsx';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
};

export default LoginContainer;