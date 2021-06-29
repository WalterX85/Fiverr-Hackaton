import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { useLoginRequest } from '../context/loginRequest';

function SignIn() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    loginRequest, setLoginRequest,
  } = useLoginRequest();

  if (loginRequest != null) {
    console.log('Axios is working');
    return (
      <Redirect to="/home" />
    );
  }

  return (
    <div id="container">
      <h1>log in!</h1>
      <form action="post" className="loginForm">
        <label className="loginEmail" htmlFor="email">
          <input className="inputLogin" ref={emailInput} type="email" id="email" placeholder="your email" required />
        </label>
        <label className="loginPassword" htmlFor="password" id="password">
          <input className="inputLogin" ref={passwordInput} type="password" placeholder="your password" required />
        </label>
        <button
          className="loginButton"
          value="submit"
          type="button"
          onClick={() => {
            const url = 'http://localhost:9000/login';
            axios.post(url, {
              email: emailInput.current.value,
              password: passwordInput.current.value,
            })
              .then((response) => {
                setLoginRequest(response.data);
              });
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
