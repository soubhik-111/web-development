import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import WeatherDefaultCard from './WeatherDefaultCard';

const CurrentLocation = () => {
    const { weatherData } = useContext(WeatherContext);
 
    if (!weatherData) return null;

    return (
        <div style={{margin:"100px"}}>
            
        <WeatherDefaultCard weatherData={weatherData}/>
        </div>
    );
};

export default CurrentLocation;
