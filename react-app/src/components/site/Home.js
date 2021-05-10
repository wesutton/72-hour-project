import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

import './home.scss'

const Home = () => {
    return (
        <div className="landingDiv">
        <Container className="landing">
            <Row>
                <Col md={12} xs={12}>
                    <h1>Welcome to Get Grub!</h1>  
                <button><Link to="/grub">Weather, Food, Location!</Link></button>
                </Col>
            </Row>
        </Container>
        </div>


    )
}

export default Home