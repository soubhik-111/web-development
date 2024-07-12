import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const HourSection = () => {
    const { hourlyData } = useContext(WeatherContext);

    if (!hourlyData) return null;

    return (
        <section>
            <h2>Hourly Forecast</h2>
            <div className="hourly-forecast">
                {hourlyData.map((hour, index) => (
                    <div key={index} className="hour">
                        <p>{new Date(hour.dt * 1000).getHours()}:00</p>
                        <p>{hour.weather[0].description}</p>
                        <p>{hour.temp}°C</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HourSection;
