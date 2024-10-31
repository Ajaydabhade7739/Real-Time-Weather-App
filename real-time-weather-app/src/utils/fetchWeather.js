const fetchWeather = async (lat, lon) => {
    const apiKey = '1d183a9861dc603b0db90d840ab719d7';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data.");
    return response.json();
};

export default fetchWeather;
