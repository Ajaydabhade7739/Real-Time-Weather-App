import React, { useState } from 'react';
import WeatherCard from './Components/WeatherCard';
import LocationButton from './Components/LocationButton';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
            <h1 className="text-3xl font-bold mb-6">Real-Time Weather App</h1>
            <LocationButton setWeatherData={setWeatherData} setLoading={setLoading} setError={setError} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
}

export default App;
