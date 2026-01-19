import React from 'react';
import {
    ChevronLeft,
    Sunrise,
    Sunset,
    Droplets,
    Wind,
    Sun,
    Eye,
    Cloud,
    Gauge,
    Zap,
    Navigation,
    Thermometer
} from 'lucide-react';

const WeatherDetails = ({ onBack, weatherData }) => {

    if (!weatherData) return null;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const data = {
        city: weatherData.name,
        country: weatherData.sys.country,
        type: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        current: Math.round(weatherData.main.temp),
        min: Math.round(weatherData.main.temp_min),
        max: Math.round(weatherData.main.temp_max),
        stats: {
            sunrise: formatTime(weatherData.sys.sunrise),
            sunset: formatTime(weatherData.sys.sunset),
            humidity: weatherData.main.humidity + "%",
            pressure: weatherData.main.pressure + " hPa",
            uvIndex: "4 (Moderate)",
            windSpeed: Math.round(weatherData.wind.speed * 3.6) + " km/h",
            visibility: Math.round(weatherData.visibility / 1000) + " km",
            clouds: (weatherData.clouds?.all || 0) + "%",
            snow: (weatherData.snow?.['1h'] || 0) + " cm"
        }
    };

    return (
        <div className="w-full max-w-full mx-auto pt-8 pb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start w-full">

                {/* LEFT COLUMN - Slides in from left */}
                <div className="flex flex-col gap-6 order-2 lg:order-1 animate-slide-left">
                    {/* Status & Description Box */}
                    <div className="relative bg-white rounded-[2.5rem] pt-10 pb-4 shadow-2xl shadow-blue-900/10 transition-transform hover:scale-[1.02] flex flex-col items-center justify-center w-full overflow-hidden">
                        <span className="text-[12px] font-black uppercase tracking-widest text-gray-400 mb-6 z-10">Current Atmosphere</span>

                        <div className="flex flex-col items-center gap-4 z-10 px-8 text-center">
                            <div className="p-4 bg-blue-50 rounded-full border border-blue-100 shadow-inner">
                                <Cloud className="w-8 h-8 text-blue-600" />
                            </div>
                            <span className="text-gray-900 font-black uppercase tracking-[0.2em] text-2xl drop-shadow-sm">
                                {data.type}
                            </span>
                            <p className="text-gray-500 font-bold text-base md:text-lg max-w-sm leading-relaxed px-6 text-center italic">
                                {data.description}
                            </p>
                        </div>

                        {/* Trend Wave */}
                        <div className="w-full mt-12 relative px-2">
                            <div className="flex justify-between w-full px-6 mb-1">
                                <span className="text-[9px] font-black text-green-500 uppercase tracking-tighter">Low Stability</span>
                                <span className="text-[9px] font-black text-red-500 uppercase tracking-tighter">Heat Peak</span>
                            </div>
                            <svg className="w-full h-16" viewBox="0 0 400 60" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#22c55e" />
                                        <stop offset="50%" stopColor="#eab308" />
                                        <stop offset="100%" stopColor="#ef4444" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,30 Q50,10 100,35 T200,30 T300,45 T400,20"
                                    fill="none"
                                    stroke="url(#waveGradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    className="animate-pulse"
                                />
                            </svg>
                            <div className="absolute -bottom-2 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
                        </div>
                    </div>

                    {/* Three Parts Temp Grid */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[1.8rem] p-6 flex flex-col items-center justify-center border border-white/30 shadow-sm transition-transform hover:scale-105 h-36">
                            <Cloud className="absolute -right-4 -bottom-4 w-20 h-20 text-blue-400/15 rotate-12" />
                            <span className="text-[11px] font-black text-blue-600 mb-1 z-10 uppercase tracking-widest text-center">Atmosphere <br /> Now</span>
                            <span className="text-3xl font-black text-gray-900 z-10">{data.current}°</span>
                        </div>
                        <div className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[1.8rem] p-6 flex flex-col items-center justify-center border border-white/30 shadow-sm transition-transform hover:scale-105 h-36">
                            <Thermometer className="absolute -right-4 -bottom-4 w-20 h-20 text-indigo-400/15 -rotate-12" />
                            <span className="text-[11px] font-black text-indigo-500 mb-1 z-10 uppercase tracking-widest text-center">Minimum <br /> Record</span>
                            <span className="text-3xl font-black text-gray-900 z-10">{data.min}°</span>
                        </div>
                        <div className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[1.8rem] p-6 flex flex-col items-center justify-center border border-white/30 shadow-sm transition-transform hover:scale-105 h-36">
                            <Sun className="absolute -right-4 -bottom-4 w-20 h-20 text-orange-400/15 rotate-45" />
                            <span className="text-[11px] font-black text-orange-500 mb-1 z-10 uppercase tracking-widest text-center">Maximum <br /> Reach</span>
                            <span className="text-3xl font-black text-gray-900 z-10">{data.max}°</span>
                        </div>
                    </div>
                </div>

                {/* CENTER COLUMN - Fades up */}
                <div className="flex flex-col items-center text-center py-6 order-1 lg:order-2 animate-fade-up">
                    <div className="mb-8 w-full pt-10">
                        <div className="flex flex-col items-center mb-10">
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase drop-shadow-2xl select-none">
                                {data.city}
                            </h2>
                            <span className="text-blue-900/40 text-3xl md:text-4xl font-black uppercase tracking-widest mt-1">
                                {data.country}
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-2 mt-12 py-12 px-8 rounded-[3rem] ">
                            <div className="relative font-black text-gray-900 leading-none tracking-tighter flex items-end select-none">
                                <div className="flex items-start">
                                    <span className="text-[11rem]">{data.current}</span>
                                    <span className="text-7xl mt-6">°</span>
                                </div>
                                <span className="text-7xl font-black text-gray-700/30 mb-6 -ml-2">C</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Slides in from right */}
                <div className="flex flex-col gap-6 order-3 lg:order-3 animate-slide-right">
                    {/* Solar Cycle */}
                    <div className="bg-blue-600/50 border border-white/30 backdrop-blur-xl rounded-[3rem] p-6 flex flex-col justify-between min-h-[180px] shadow-2xl transition-all hover:scale-[1.02]">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[12px] font-black uppercase tracking-widest text-blue-100/70">Solar Cycle</span>
                            <div className="bg-white/20 p-2 rounded-xl"><Sun className="w-5 h-5 text-white" /></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-xl shadow-lg shadow-orange-500/20"><Sunrise className="w-5 h-5 text-orange-400" /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Sunrise</span>
                                        <div className="text-xl font-black text-white leading-tight">{data.stats.sunrise}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-white/20" />
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-xl shadow-lg shadow-indigo-500/20"><Sunset className="w-5 h-5 text-indigo-400" /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Sunset</span>
                                        <div className="text-xl font-black text-white leading-tight">{data.stats.sunset}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Box */}
                    <div className="bg-blue-600/50 border border-white/30 backdrop-blur-xl rounded-[3rem] p-8 text-white shadow-3xl flex flex-col gap-8 min-h-[400px]">
                        <div className="flex justify-between items-center">
                            <span className="text-[14px] font-black uppercase tracking-widest text-blue-100/70">Weather Metrics</span>
                            <Navigation className="w-5 h-5 text-blue-200 fill-blue-200/20" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Humidity", val: data.stats.humidity, icon: Droplets, color: "text-blue-300" },
                                { label: "Wind Velocity", val: data.stats.windSpeed, icon: Wind, color: "text-blue-200" },
                                { label: "UV Intensity", val: data.stats.uvIndex.split(' ')[0], icon: Zap, color: "text-yellow-300" },
                                { label: "Visibility", val: data.stats.visibility, icon: Eye, color: "text-blue-100" }
                            ].map((stat, i) => (
                                <div key={i} className="relative overflow-hidden bg-white/15 rounded-[1.8rem] px-5 py-3 border border-white/20 shadow-lg flex flex-col justify-between h-28 transition-transform hover:scale-[1.03]">
                                    <Cloud className="absolute -right-3 -bottom-3 w-16 h-16 text-white/5 rotate-12" />
                                    <div className="flex justify-between items-center mb-1 z-10">
                                        <span className="text-[13px] font-black uppercase tracking-widest text-white/60">{stat.label}</span>
                                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                    </div>
                                    <div className="text-3xl font-black text-white z-10">{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherDetails;
