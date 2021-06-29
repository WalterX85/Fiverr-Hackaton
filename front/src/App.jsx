import React from 'react';
import { LoginRequestProvider } from './context/loginRequest';
import Header from './Pages/Header';
import './CSS/App.scss';
import Routes from './Pages/Routes';

function App() {
  return (
    <div className="App">
      <LoginRequestProvider>
        <Header />
        <Routes />
      </LoginRequestProvider>
    </div>
  );
}

export default App;
