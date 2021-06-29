import React from 'react';
import { LoginRequestProvider } from './context/loginRequest';
import Header from './Pages/Header';
import Profile from './Pages/Profile';
import './CSS/App.scss';
import Routes from './Pages/Routes';

function App() {
  return (
    <div className="App">
      <LoginRequestProvider>
        <Header />
        <Profile />
      </LoginRequestProvider>
    </div>
  );
}

export default App;
