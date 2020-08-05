//imports from libraries
import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

//imports from src
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './Components/NavBar';

//App component
function App() {
  return (
    <div className="App">
      <NavBar />

      {/* router  */}
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
