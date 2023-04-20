import React from 'react';
import './App.css';
import LeftContainer from './features/LeftContainer/LeftContainer';
import MiddleContainer from './features/MiddleContainer/MiddleContainer';
import RightContainer from './features/RightContainer/RightContainer';
// import logo from './logo.svg';

function App() {
  return (
    <div className='rootcontainer'>
      <LeftContainer/>
      <MiddleContainer/>
      <RightContainer/>
    </div>
  );
}

export default App;
