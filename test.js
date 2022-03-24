it ('sum', () => {
    const total = 1 + 1;
  
    expect(total).toBe(2);
})

// test('it should sum correctly', () => {

//     expect(1+2).toEqual(3)
// })
// import {render, screen } from "@testing-library/react"
// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');
// const app = express();
// //const server = 'http://localhost:3000';

// const userController = require('./server/controllers/userController');
// const dbController = require('./server/controllers/dbController');
// const { hasUncaughtExceptionCaptureCallback } = require('process');


// app.post('/login',  userController.checkUser,
//  (req, res) => {
//     return res.status(200).json(res.locals.loginUser)
// })

// app.get('/test', (req,res) => {
//     res.status(200).send();
// })
// app.listen(3000, () => console.log(`App listening on port ${3000}`));
// front end test






// describe('front end test', () => {
//      first test
    // let clicked = false;
    // const signUpBtn = document.querySelector('login-btn')
    
    // signUpBtn.addEventListener('click', function () {
    //     clicked = true;
    // })
    
    // //  expect(global.window.location.href).toContain('/fee+d')
    // expect(global.window.location.href).toContain('/feed');

  
//     expect(data.userid).toEqual(expect.any(Number))
//     })

        
  
//   //2nd test  
    
//   test('should log user in', () => {
//       const email =  "red@gmail.com";
//       const password =  "1234"
// const body = { email: "red@gmail.com", password:"1234"}

//       const reqOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: email, password: password})
//         }
//         fetch('/db/login', reqOptions)
//       .then(res => {

//         return res.json()
//       })
//       .then((authStatus) => {
//           console.log("-----",authStatus)
      
//   })
  
//   expect(authStatus.userid).toBe(Number);
  
//  expect(global.window.location.href).toContain('/feed')

//   })
  
// })


// backend tests
// describe('Back-end tests',   function(){
//     it('Should successfully respond to a login attempt from an invalid user ID.', () => {

        // send a post request to login with invalid user data
        // should not invoke the redirect

        // const invalidUser = {
        //     firstName: '!invalidFirstName',
        //     lastName:'!invalidLastName',
        //     username:'!invalidUsername',
        //     email:'!invalidEmail',
        //    // password:'!invalidPassword',
        // }

        // const validUser = {
        //     email:'jetyn@gmail.com',
        //     password:'123',
        // }

        // request(app)
        // .post('/login')
        // .send(validUser)
        // .end(async(err, res) => {
        //     await console.log(res.body)
        // })


        // works
        // request(app)
        // .get('/test')
        // .end((err,res) => {
        //     if (err) throw err;
        //     expect(res.status).toBe(400)
        // })


        // return request(app)
        // .post('/login')
        // .send(validUser)
        // .end((err,res) => {
        //     if (err) throw err;
        //     expect(res.status).toBe(200)
        // })




        // baseline test
    
    // request(app)

        



//     });    
// })

