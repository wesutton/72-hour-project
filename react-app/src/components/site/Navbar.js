
import {
    Switch
} from 'react-router-dom'
import SatImg from '../apps/Nasa api/index'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import '../../App.scss'


const Header = () => {
    return (
        <div>
    <header>
        <Navbar className = "header">
            <NavbarBrand>GET GRUB</NavbarBrand> 
              <Nav navbar>
              <NavItem>
              </NavItem>
              </Nav>
        </Navbar>        
    </header>
        <SatImg />
    </div>
     );
};

export default Header;