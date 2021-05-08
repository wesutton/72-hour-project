
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Weather from '../apps/Weather-api'
import SatImg from '../apps/Nasa api/index'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import '../../App.scss'


const Header = () => {
    return (
    <header>
        <Navbar className = "header">
            <NavbarBrand href="/">Home</NavbarBrand>
              <Nav navbar>
                <NavItem>
              <NavLink className="navLink" href ="/weather-api"> Weather API</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="navLink" href ="/nasa-image">Nasa Earth Imagery</NavLink>
              </NavItem>
              </Nav>
        </Navbar>
            
            
        <Switch>
                <Route exact path ="/Home"><Home /></Route>
                <Route exact path ="/"><Home /></Route>
                <Route exact path = "/weather-api"><Weather /></Route>
                <Route exact path = "/nasa-image"><SatImg /></Route>
        </Switch>
    </header>
     );
};

export default Header;