import React from 'react';
import fetchWeather from '../utils/fetchWeather';
import ARLogo from '../assets/ar-logo.png'; 

function LocationButton({ setWeatherData, setLoading, setError }) {
    const handleLocation = () => {
        setLoading(true);
        setError(null);
        
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const data = await fetchWeather(latitude, longitude);
                setWeatherData(data);
            } catch (error) {
                setError("Unable to fetch weather data.");
            } finally {
                setLoading(false);
            }
        }, (error) => {
            setError("Location access denied.");
            setLoading(false);
        });
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 relative">
            <button 
                onClick={handleLocation} 
                className="bg-blue-400 text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300 mb-6 z-10">
                Get Weather
            </button>
            <div className="absolute top-5 right-5 mix-blend-screen">
                <img 
                    src={ARLogo} 
                    alt="AR Logo" 
                    className="w-16 h-16 border-2 border-white rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 filter brightness-90" 
                    onClick={() => alert('AR Logo Clicked!')} 
                />
            </div>
        </div>
    );
}

export default LocationButton;
