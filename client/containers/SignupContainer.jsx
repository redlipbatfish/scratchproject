import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from '../components/SignupForm.jsx';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <SignupForm />
      </div>
    );
  }
};

export default SignupContainer;