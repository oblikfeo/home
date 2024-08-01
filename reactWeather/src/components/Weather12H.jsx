import React, { useEffect, useState } from 'react';
import axios from 'axios'
import img from './iconWeather/16-s.png'

export function Weather12H() {
    
    const [weatherObj, setWeatherObj] = useState({})
    const [icon, setIcon] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/294463?apikey=dHW5vmVdVOb3zvGgJFxC5wAwGuLsaT9v')
        setWeatherObj(response.data.map((item) => item.Temperature.Value))
        setIcon(response.data.map((item) => item.WeatherIcon))
        console.log(response)
    }
    
    return (
        <div className='test'>
            <div className='h12'>
                <div className='timeFont'>14:00</div>
                <img src={img} alt="" />
                <div className='timeFont'>15 °C</div>
            </div>
        </div>
                
            
    )
}