import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { toast } from 'react-toastify';
import Search from './Search';

const Header = () => {
    const [location, setLocation] = useState('');
    const { fetchWeatherData } = useContext(WeatherContext);

    useEffect(() => {
        fetchWeatherData()
    },[])

    const handleSearch = (e) => {
        e.preventDefault()
        if (location.trim() === '') {
            toast.error('Please enter a valid location');
            return;
        }
        fetchWeatherData(location);
        setLocation('');
    };

    return (
        <header>
            <nav>
                <h1>Weather App</h1>
                <form onSubmit={handleSearch}>
                    {/* <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                    <button type='submit'>Search</button> */}
                    <Search/>
                </form>
            </nav>
        </header>
    );
};

export default Header;
