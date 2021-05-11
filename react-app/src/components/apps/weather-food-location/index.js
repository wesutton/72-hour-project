import "./styles.scss"
import { useEffect, useState } from 'react'
import { Container, Col, Row, Navbar } from 'reactstrap'
import {Link} from 'react-router-dom'
//import 'cors-anywhere'


const SatImg = () => {

    const [image, setImage] = useState()
    const [weather, setWeather] = useState()
    const [metric, setMetric] = useState()
    const [food, setFood] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
   


    //!Location for url params
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })  
    }


    //!date for nasa url
    const currentDate = new Date()
    let date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();


    //!nasa fetch
    const data = async () => {
        const res = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${date}&dim=0.037&api_key=${process.env.REACT_APP_NASA_KEY}`)
        const json = await res.json()
        setImage(json)
        console.log(json)
    }

    
    //!weather fetch
    const dataWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=`
        const key = process.env.REACT_APP_WEATHER_KEY
        const res = await fetch(url + key)
        const json = await res.json()
        setWeather(json)
        console.log('hello', json)
    }
        //*Weather fetch metric
    const celWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=`
        const key = process.env.REACT_APP_WEATHER_KEY
        const res = await fetch(url + key)
        const json = await res.json()
        setMetric(json)
        console.log('hello', json)

    }

    //!Yelp fetch
    const yelp = async () => {
        
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants&limit=21&latitude=${latitude}&longitude=${longitude}`
        console.log(url)
        const res = await fetch(url, {
            headers: {
                "Authorization": "Bearer uFN1GSUABZatn8BDPhsWXP92ZNil26lcUKbN-6R3W4d_xCoHwzOZF7H-rjffZHPgMOfqdhrmbGjs2gWf9fWMTigg8pwfz7IHkGf0I-BDgJ5yUxQQnic7qfqKXT-VYHYx"
            }
        })
        const json = await res.json()
        setFood(json)
        console.log('yelp', json)
    }

    useEffect(() => {
        getLocation()
    }, [])


    return (
        <div>
            <header>
                <Navbar className="header">
                    <h1><Link to="/">GET GRUB</Link></h1>
                </Navbar>
            </header>
            <div className="weatherDiv">
                <Container className="weatherContainer">
                    <Row>
                        <Col md={12} xs={2}>
                            <h2>Today's Weather</h2>
                            <hr/>
                            {longitude && latitude ? <button onClick={dataWeather}>Get Weather</button> : null}
                            <p>{weather?.weather[0]?.description}</p>
                            {weather ? <p>{weather?.main?.temp}°F</p> : null}
                            {weather?.weather[0]?.description && weather?.main?.temp ? <button onClick={celWeather}>Metric</button>:null}
                            { metric ? <p>{metric?.main?.temp}°C</p>:null}
                        </Col>
                    </Row>
                </Container>
            </div>
            < Container className="main">
                <Row>
                    <Col md={10} xs={10} className="textDiv">
                        <h2>You Are Here: </h2>
                        {longitude ? <p>Longitude: {longitude} </p> : <p>Searching for longitude</p>}
                        {latitude ? <p>Latitude: {latitude} </p> : <p>Searching for latitude</p>}
                    </Col>
                </Row>
                <Row>
                    <Col md={10} xs={10} className="imgDiv">
                        {longitude && latitude ? <button onClick={data}>Get Image</button> : null}
                        {image?.url ? <img src={image?.url} alt="Sat img"></img> : null}
                    </Col>
                </Row>
            </Container>
            <Container className="foodContainer">
                <Row>
                    <Col>
                    {longitude && latitude ? <button onClick={yelp}>Restaurants</button> : null}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default SatImg