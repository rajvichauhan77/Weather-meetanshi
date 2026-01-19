import React, { useState } from 'react';
import { MapPin, Sun, Cloud } from 'lucide-react';

const Hero = ({ onCheckWeather }) => {
    const [loading, setLoading] = useState(false);

    const handleLocationFetch = () => {
        // Trigger immediate transition to show the new skeleton loader
        onCheckWeather();
    };

    return (
        <section className="flex flex-col items-center justify-center pt-20 pb-20 px-4 animate-page-back max-w-7xl mx-auto">
            {/* Main Heading - Further reduced size as requested */}
            <div className="text-center w-full mb-12">
                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-4 drop-shadow-sm select-none">
                    Weather App <span className="text-blue-900/40">& Forecast</span>
                </h2>
                <p className="text-xs md:text-sm text-white/40 font-bold max-w-lg mx-auto mt-4 px-4 uppercase tracking-[0.2em]">
                    Instant weather intelligence for your location
                </p>
            </div>

            {/* Reverting Button to previous style */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-blue-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

                <button
                    onClick={handleLocationFetch}
                    disabled={loading}
                    className="relative flex items-center gap-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-12 py-6 rounded-[2rem] border border-blue-400/30 shadow-2xl transition-all hover:scale-[1.05] active:scale-95 disabled:opacity-75 overflow-hidden"
                >
                    <div className="flex items-center gap-2">
                        {loading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <MapPin className="w-6 h-6 text-white" />
                                <div className="flex items-center -ml-1.5 mt-0.5">
                                    <Cloud className="w-4 h-4 text-white fill-white/20" />
                                    <Sun className="w-2.5 h-2.5 text-yellow-300 fill-yellow-300 -ml-1.5 -mt-2 animate-spin-slow" />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col items-start px-1 text-left">
                        <span className="text-2xl font-black text-white tracking-tight">Check Weather</span>
                        <span className="text-xs font-bold text-blue-100/70 uppercase tracking-[0.2em]">Use My Current Location</span>
                    </div>

                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shine pointer-events-none" />
                </button>
            </div>
        </section>
    );
};

export default Hero;
