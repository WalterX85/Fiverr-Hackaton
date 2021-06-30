import React from 'react';
import { LoginRequestProvider } from './context/loginRequest';
import Routes from './Pages/Routes';
import './CSS/App.scss';

function App() {
  return (
    <div className="App">
      <LoginRequestProvider>
        <Routes />
      </LoginRequestProvider>
    </div>
  );
}

export default App;
