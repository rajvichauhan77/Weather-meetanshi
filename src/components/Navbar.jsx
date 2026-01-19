import React, { useState, useEffect } from 'react';
import { Cloud, Sun } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full px-4 md:px-12 py-8 text-gray-800">
            {/* Brand - Pushed further left */}
            <div className="flex items-center gap-4 group cursor-pointer">
                <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                    {/* Detailed Realistic Sunny Cloud SVG */}
                    <div className="relative">
                        <svg width="60" height="40" viewBox="0 0 100 60" className="drop-shadow-lg relative z-10">
                            <defs>
                                <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#f0f9ff" />
                                </linearGradient>
                                <filter id="cloudBlur" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                                </filter>
                            </defs>
                            <path
                                d="M25,50 C15,50 5,42 5,30 C5,18 15,10 25,10 C28,10 31,11 34,13 C38,5 48,0 58,0 C72,0 84,10 85,24 C93,25 100,32 100,40 C100,50 90,58 80,58 L25,58 L25,50 Z"
                                fill="url(#cloudGradient)"
                                filter="url(#cloudBlur)"
                            />
                        </svg>
                        {/* Sun added to Navbar icon */}
                        <div className="absolute -top-1 -right-1 z-0 animate-spin-slow">
                            <Sun className="w-5 h-5 text-yellow-500 fill-yellow-400 opacity-90" />
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 drop-shadow-sm select-none">
                    Weather
                </h1>
            </div>
        </nav>
    );
};

export default Navbar;
