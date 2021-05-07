import React from "react";
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Weather from '../apps/Weather-api'
import '../../App.css'


const Navbar = () => {
    return (
    <header>
        <nav className = "navbar">
            <div className = "navbar-styling"> 
            <h4><Link to ="/">Home</Link></h4>
              <ul className = "navbar-list">
              <li><Link to ="/weather-api"> Weather API</Link></li>
              </ul>
            </div>
            <div className = "navbar-routes">
        <Switch>
                <Route exact path ="/Home"><Home /></Route>
                <Route exact path ="/"><Home /></Route>
                <Route exat path = "/weather-api"><Weather /></Route>
        </Switch>
            </div>
        </nav>
    </header>
     );
};

export default Navbar;