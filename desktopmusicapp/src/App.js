import React from 'react';
import './App.scss';
import Header from './components/Header/header.component';
import LeftSideBar from './components/LeftSideBar/leftsidebar.component';

function App() {
  return (
    <div className="App">
       <div className="Header">
         <Header/>
       </div>
       <div className="content">
         <div className="leftsidebar">
            <LeftSideBar/>
         </div>
         <div className="center"></div>
         <div className="rightsidebar"></div>
       </div>
    </div>
  );
}

export default App;
