import React from 'react';
import { connect } from 'react-redux';

const LoginForm = () => {
  return (
    <div id='login-form'>
      <h1>Habitual</h1>
      <div className='wrapper-login'>
        <input type='text' className='login-input' id='username-input' name='username-input' placeholder='Enter Username' />
        <input type='password' className='login-input' id='password-input' name='password-input' placeholder='Enter Password' />
        <button className='login-btn' id='login-btn'
          onClick={submitForm}
        >Login</button>
        <div className='login-link' id='signup-btn'>Don't have an account? <br></br>Signup</div>
        
      </div>
    </div>
  );
};


function submitForm () {
  const username = document.querySelector('#username-input').value;
  const password = document.querySelector('#password-input').value;
}

export default LoginForm;