
import {
    Switch,
    Route,
} from 'react-router-dom'
import SatImg from '../apps/weather-food-location/'
import Home from '../site/Home'
import '../../App.scss'


const Header = () => {
    return (
        <div>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/grub"><SatImg /></Route>
        </Switch>
    </div>
     );
};

export default Header;