import React, { useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeatherDetails from './components/WeatherDetails';
import WeatherSkeleton from './components/WeatherSkeleton';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'details'
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleCheckWeather = () => {

    setView('details');
    setIsLoading(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const API_KEY = "805df2d6e857598912b3eb1dbb306f11";

          try {

            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();

            if (response.ok) {
              setWeatherData(data);
            } else {
              alert("Location data error.");
              setView('landing');
            }
          } catch (error) {
            console.error("API Error:", error);
            setView('landing');
          } finally {
            setTimeout(() => setIsLoading(false), 800);
          }
        },
        (error) => {
          alert("Location access denied.");
          setIsLoading(false);
          setView('landing');
        }
      );
    } else {
      alert("Geolocation is not supported.");
      setIsLoading(false);
      setView('landing');
    }
  };

  return (
    <>
      <Background>
        <div className="w-full min-h-screen">
          {view === 'landing' && <Navbar />}

          <main className={`${view === 'landing' ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" : "w-full px-4"} transition-all duration-500`}>
            {view === 'landing' ? (
              <Hero onCheckWeather={handleCheckWeather} />
            ) : (
              <div className="relative w-full">
                {isLoading ? (
                  <WeatherSkeleton key="skeleton" />
                ) : (
                  <WeatherDetails key="details" onBack={() => setView('landing')} weatherData={weatherData} />
                )}
              </div>
            )}
          </main>
        </div>
      </Background>
    </>
  );
}

export default App;
