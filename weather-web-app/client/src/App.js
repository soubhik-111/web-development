import React from 'react';
import Header from './components/Header';
import CurrentLocation from './components/CurrentLocation';
import HourSection from './components/HourSection';
import DaysSection from './components/DaysSection';
import Overview from './components/Overview';
import WeatherProvider from './contexts/WeatherContext';
import { ToastContainer } from 'react-toastify';

import "./App.css"
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <>
    <WeatherProvider>
        <div className="App">
            <Header />
            <CurrentLocation />
            <HourSection />
            <DaysSection />
            <Overview />
        </div>
    </WeatherProvider>
    <ToastContainer/>
    </>
);

export default App;
