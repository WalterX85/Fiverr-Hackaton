import React from 'react';
// import { LoginRequestProvider } from './context/loginRequest';
import Header from './Pages/Header';
import Routes from './Pages/Routes';
import './CSS/App.scss';

function App() {
  return (
    <div className="App">
      {/* <LoginRequestProvider> */}
      <Header />
      <Routes />
      {/* </LoginRequestProvider> */}
    </div>
  );
}

export default App;
