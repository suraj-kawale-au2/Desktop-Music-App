import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import './App.scss';
import Header from './components/Header/header.component';
import LeftSideBar from './components/LeftSideBar/leftsidebar.component';
import Explore from './components/Explore/explore.component';
import FeaturedTrack from './components/FeaturedTracks/featuredtrack.component';
import Charts from './components/Charts/charts.component';
import Videos from './components/Videos/videos.component';


const routes = [
    {
      path:'/',
      exact:true,
      main: () => <Explore/>
    },
    {
      path:"/featured",
      main:()=><FeaturedTrack/>
    },
    {
      path:"/charts",
      main:()=><Charts/>
    },
    {
      path:"/videos",
      main:()=><Videos/>
    }
];

function App() {
  return (
    <Router>
    <div className="App">
       <div className="Header">
         <Header/>
       </div>
       <div className="content">
         <div className="leftsidebar">
            <LeftSideBar/>
         </div>
         <div className="center">
           <Switch>
             {
               routes.map((route,i)=>(
                 <Route
                 key={i}
                 path={route.path}
                 exact={route.exact}
                 children={<route.main/>}
                 />
               ))
             }
           </Switch>
         </div>
         <div className="rightsidebar"></div>
       </div>
    </div>
    </Router>
  );
}

export default App;
