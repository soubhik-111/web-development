import React, { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [hourlyData, setHourlyData] = useState(null);
    const [dailyData, setDailyData] = useState(null);
    const [overviewData, setOverviewData] = useState(null);
    const [error, setError] = useState('');

    const getLocation = async () => {
        try {
            const ipResponse = await axios.get(`${process.env.REACT_APP_IP_API_URL}`);
            const locationResponse = await axios.get(`${process.env.REACT_APP_GEO_API_URL}${ipResponse.data}/geo`);
            return (locationResponse.data.city);
        } catch (err) {
            toast.error("Something went wrong in weather data.")
            setError('Error fetching weather data');
            return null;
        }
    }
    const fetchWeatherData = async (loc) => {
        const toastId = toast.loading('Loading...');
        try {
            let location = !loc ? await getLocation() : loc ;
            const response = await axios.get(`${process.env.REACT_APP_WEATHER_API_URL}weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            setWeatherData(response.data);
            // Fetch additional data as needed
        } catch (err) {
            if(err.response.data.cod === "404")
                toast.error(err.response.data.message);
            else
                toast.error('Error fetching weather data');
            setError('Error fetching weather data');
        }
        finally{
            toast.dismiss(toastId)
        }
    };

    return (
        <WeatherContext.Provider
            value={{ weatherData, hourlyData, dailyData, overviewData, fetchWeatherData, error, setError }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
