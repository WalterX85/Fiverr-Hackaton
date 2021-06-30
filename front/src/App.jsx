import React from 'react';
import { LoginRequestProvider } from './context/loginRequest';
import Routes from './Pages/Routes';
import './css/App.scss';

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
