import "./styles.scss"
import {useEffect, useState} from 'react'
import {Container, Col, Row} from 'reactstrap'
import env from "react-dotenv"
//require('dotenv').config

const SatImg = () => {
    
    const [image, setImage] = useState()
    const [weather, setWeather] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }


    const currentDate = new Date()
    let date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

   
    
    const data = async () => {
        const res = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${date}&dim=0.037&api_key=${process.env.REACT_APP_NASA_KEY}`)
        const json = await res.json()
        setImage(json)
        console.log(json)
    }

    const dataWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=`
        const key = process.env.REACT_APP_WEATHER_KEY
        const res = await fetch(url + key)
        const json = await res.json()
        setWeather(json)
        console.log('hello', json) 
    }

    useEffect(() =>{ 
        getLocation()
    }, [])

    return(
        <div>
        < Container className ="main">
            <Row>
             <Col md={10} xs={10} className="textDiv"> 
            <h3>You Are Here: </h3>
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
        <div>
        <Container className="weatherContainer">
            <Row>
                <Col>
                {longitude && latitude ? <button onClick={dataWeather}>Get Weather</button> : null}
                 <p>{weather?.weather[0]?.description}</p>
                 <p>{weather?.main?.temp}</p>
                </Col>
            </Row>
        </Container>
        </div>
        </div>
       
    )
}

export default SatImg