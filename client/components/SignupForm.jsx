import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  function submitForm () {
    const email = document.querySelector('#username-input').value;
    const password = document.querySelector('#password-input').value;
    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password})
    }
    navigate('/signup');
    // fetch('/login', reqOptions)
    // .then(res => res.json())
    // .then((authStatus) => {
    //   console.log(authStatus)
    //   window.location = '/feed';
    // })
  }
  return (
    <div id='login-form'>
      <h1>Habitual</h1>
      {/* <Link to="/feed">About</Link> */}
      <div className='wrapper-login'>
        <input type='text' className='login-input' id='username-input' name='username-input' placeholder='Enter Email' />
        <input type='password' className='login-input' id='password-input' name='password-input' placeholder='Enter Password' />
        <button className='login-btn' id='login-btn'
          onClick={submitForm}
        >Login</button>
        <div className='login-link' id='signup-btn'>Don't have an account? <br></br>Signup</div>
      </div>
    </div>
  );
};

export default LoginForm;