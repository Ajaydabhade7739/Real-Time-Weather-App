import React from 'react';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

function WeatherCard({ data }) {
    const getWeatherIcon = (description) => {
        switch (description.toLowerCase()) {
            case 'clear':
                return <WiDaySunny className="text-yellow-300 text-6xl md:text-8xl" />;
            case 'clouds':
                return <WiCloudy className="text-gray-400 text-6xl md:text-8xl" />;
            case 'rain':
                return <WiRain className="text-blue-400 text-6xl md:text-8xl" />;
            default:
                return <WiCloudy className="text-gray-400 text-6xl md:text-8xl" />;
        }
    };

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-6 md:p-10 text-gray-800 animate-fadeIn z-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{data.name}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
                {getWeatherIcon(data.weather[0].main)}
                <p className="text-5xl md:text-6xl font-bold">{Math.round(data.main.temp)}°C</p>
            </div>
            <p className="text-xl md:text-2xl capitalize text-center mb-4">{data.weather[0].description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-lg md:text-xl">
                <div>
                    <p className="font-semibold">Feels like</p>
                    <p>{Math.round(data.main.feels_like)}°C</p>
                </div>
                <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{data.main.humidity}%</p>
                </div>
                <div>
                    <p className="font-semibold">Wind</p>
                    <p>{data.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
