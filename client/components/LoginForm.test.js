import React from 'react'
 import { render, screen } from "@testing-library/react"
 import LoginForm from './LoginForm.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// it('renders LoginForm component', () => {
//     render(<BrowserRouter>
//     <LoginForm />
//     </BrowserRouter>);
// })


it('should have a user name and a password field', () => {
    render(<BrowserRouter>
    <LoginForm/>
    </BrowserRouter>  );
    
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    
})

