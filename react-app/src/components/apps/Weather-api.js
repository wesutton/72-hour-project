import {useEffect, useState} from "react";

const Weather = () => {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=39.7684&lon=86.1480&units=metric&appid=a3dedbc9c9e20947fd59ab3a889ad517';
    const [data, setData] = useState();

    const initData = async () => {
        const res = await fetch (url, {
            headers: {
                "Content-Type" : "application/json",
            }
            })
            const json = await res.json();
            setData(json);
            console.log(json);

    };
    
    useEffect(() => {
        initData();
    },[]);

    return (
        <div>
             {data?.map((temperature) => {
                 return(
                     <div>
                     <h3>{temperature.main.temp}</h3>
                     </div>
                 );
             })}
        </div>
    );

};


export default Weather;


