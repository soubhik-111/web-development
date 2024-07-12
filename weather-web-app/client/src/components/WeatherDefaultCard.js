import React from 'react';

const WeatherDefaultCard = ({ weatherData }) => {
    const {
        name,
        weather,
        main: { temp, humidity },
        wind: { speed },
        dt,
    } = weatherData;

    const date = new Date(dt * 1000).toLocaleString();

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>Condition: {weather[0].description}</p>
            <p>Temperature: {temp}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {speed} m/s</p>
            <p>Date & Time: {date}</p>
        </div>
    );
};

export default WeatherDefaultCard;
