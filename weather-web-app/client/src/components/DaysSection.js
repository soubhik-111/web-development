import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const DaysSection = () => {
    const { dailyData } = useContext(WeatherContext);

    if (!dailyData) return null;

    return (
        <section>
            <h2>Daily Forecast</h2>
            <div className="daily-forecast">
                {dailyData.map((day, index) => (
                    <div key={index} className="day">
                        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <p>{day.weather[0].description}</p>
                        <p>{day.temp.day}°C</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DaysSection;
