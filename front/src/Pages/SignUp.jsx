import React, { useRef } from 'react';

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <div className="registerForm-container">
      <form
        className="registerForm"
        onSubmit={(event) => {
          event.preventDefault();
          const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
          };
          const config = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          };
          fetch('http://localhost:9000/users', config).then((res) => res.json()).then((data) => {
            console.log(data);
          });
        }}
      >
        <label className="emailRegister" htmlFor="email" id="email">
          {' '}
          <input className="inputRegister" ref={emailInput} type="email" id="email" name="email" placeholder="INSEREZ VOTRE MAIL" />

        </label>
        <label className="passwordRegister" htmlFor="password" id="password">

          <input className="inputRegister" ref={passwordInput} type="password" id="password" name="password" placeholder="VOTRE MOT DE PASSE" />
        </label>
        <button className="registerButton" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}

export default Register;
