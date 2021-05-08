import "./styles.scss"
import {useEffect, useState} from 'react'

// const getDate = () => {
//     const date = new Date(Data.now()).toDateString()
//     return date
// }

const SatImg = () => {

    // const baseUrl = "https://api.nasa.gov/planetary/earth/imagery"

    //const date = new Date(Data.now()).toDateString()
    
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2018-01-01&dim=0.15&api_key=`
    const key = "bphLAKHvd9YWVncp44lf6R8KCxT8eDomyxy7ZSZd"
    
   const [image, setImage] = useState()

    const data = async() => {
        const res = await fetch(url + key, {
            headers: 
            {'Content-Type': 'application/json'}
        })
        const json = await res.json()
        setImage(json)
        console.log(json)
    }

    useEffect(() =>{
        data()
    }, [])

    



    return(
        <div>
            <h3>Here's your location</h3>
            <img src={image?.url} alt="Sat img"></img>
            

           
        </div>
    )
}

export default SatImg