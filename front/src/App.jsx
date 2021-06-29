import React from 'react';
import './CSS/App.scss';
import { LoginRequestProvider } from './context/loginRequest';
import Header from './Pages/Header';
// import Forum from './components/Forum';
// import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';

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
