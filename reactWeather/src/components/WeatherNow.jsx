import React, { useEffect, useState } from 'react';
import axios from 'axios'

export function WeatherNow() {
    
    const [weatherObj, setWeatherObj] = useState({})
    const [icon, setIcon] = useState('')

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const response = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/294463?apikey=dHW5vmVdVOb3zvGgJFxC5wAwGuLsaT9v')
        setWeatherObj(response?.data?.[0]?.Temperature?.Metric)
        setIcon(response?.data?.[0]?.WeatherIcon)
    }

    let date = new Date()


    return (
        <div className='now'>
            <div>
                <div>{weatherObj.Value} °C</div>
                <div>{date.toLocaleDateString().split('.').slice(0, 2).join('.')}</div>
            </div>
            <div>
                <img src={`src/components/iconWeather/${icon < 10 ? '0' : ''}${icon}-s.png`} alt="Иконка погоды" />
            </div>
        </div>
        )
}