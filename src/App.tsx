import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ParentComponent from './Components/ParentComponent/ParentComponent';
// import { MyContext } from './Context/ContextApi';
import HomeContainer from './Containers/HomeContainer';

function App() {
  return (
    <div className="App">
      {/* <MyContext.Provider value={"Hello From context"}> */}
        <h1>Hello</h1>
        {/* <ParentComponent></ParentComponent> */}
        <HomeContainer></HomeContainer>
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
