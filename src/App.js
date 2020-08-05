import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";



import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path ="/" component ={Home} />
      <Route exact path ="/rooms" component ={Rooms} />
      <Route exact path ="/rooms/:slug" component ={SingleRoom} />
      <Route component = {Error} />
      </Switch>
     
    </div>
  );
}

export default App;
