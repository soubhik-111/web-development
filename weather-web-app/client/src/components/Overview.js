import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const Overview = () => {
    const { overviewData } = useContext(WeatherContext);

    if (!overviewData) return null;

    return (
        <section>
            <h2>Yearly Overview</h2>
            <div className="yearly-overview">
                {/* Display yearly overview data */}
            </div>
        </section>
    );
};

export default Overview;
