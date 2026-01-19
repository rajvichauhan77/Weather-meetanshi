import React from 'react';

const Background = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#78afff]">
            {/* Grain Overlay Filter */}
            <svg className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-[100] w-full h-full">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Center-Focused Mesh Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(at 50% 50%, rgba(79, 135, 255, 1) 0%, transparent 50%),
                        radial-gradient(at 20% 20%, rgba(120, 175, 255, 0.8) 0%, transparent 40%),
                        radial-gradient(at 80% 20%, rgba(153, 195, 255, 0.7) 0%, transparent 40%),
                        radial-gradient(at 20% 80%, rgba(196, 218, 251, 0.6) 0%, transparent 40%),
                        radial-gradient(at 80% 80%, rgba(120, 175, 255, 0.8) 0%, transparent 40%),
                        rgba(79, 135, 255, 1)
                    `
                }}
            />

            {/* Subtle Sun Rays - Conic gradient for light streaks */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] pointer-events-none opacity-5 animate-spin-slow mix-blend-soft-light"
                style={{
                    background: 'conic-gradient(from 0deg at 20% 20%, transparent 0deg, rgba(255, 255, 255, 0.4) 10deg, transparent 20deg, rgba(255, 255, 255, 0.4) 40deg, transparent 60deg, rgba(255, 255, 255, 0.4) 100deg, transparent 140deg)'
                }}
            />

            {/* Geometric Patterns inspired by the top right of the screenshot */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none hidden md:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50" stroke="white" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Stylized Clouds near the geometric pattern */}
            <div className="absolute top-[5%] right-[10%] opacity-20 pointer-events-none hidden md:block animate-float">
                <svg width="120" height="70" viewBox="0 0 120 60" fill="white">
                    <circle cx="30" cy="35" r="20" />
                    <circle cx="60" cy="25" r="25" />
                    <circle cx="90" cy="35" r="20" />
                </svg>
            </div>
            <div className="absolute top-[15%] right-[5%] opacity-15 pointer-events-none hidden md:block animate-float" style={{ animationDelay: '-3s' }}>
                <svg width="80" height="50" viewBox="0 0 120 60" fill="white" className="scale-75">
                    <circle cx="30" cy="35" r="20" />
                    <circle cx="60" cy="25" r="25" />
                    <circle cx="90" cy="35" r="20" />
                </svg>
            </div>

            {/* Stylized Clouds on the Left side too */}
            <div className="absolute top-[30%] left-[3%] opacity-15 pointer-events-none hidden md:block animate-float" style={{ animationDelay: '-4s' }}>
                <svg width="100" height="60" viewBox="0 0 120 60" fill="white" className="scale-90">
                    <circle cx="30" cy="35" r="20" />
                    <circle cx="60" cy="25" r="25" />
                    <circle cx="90" cy="35" r="20" />
                </svg>
            </div>
            <div className="absolute bottom-[20%] left-[8%] opacity-10 pointer-events-none hidden md:block animate-float" style={{ animationDelay: '-1s' }}>
                <svg width="140" height="80" viewBox="0 0 120 60" fill="white" className="opacity-80">
                    <circle cx="30" cy="35" r="20" />
                    <circle cx="60" cy="25" r="25" />
                    <circle cx="90" cy="35" r="20" />
                </svg>
            </div>

            {/* Animated Background Clouds - Multiple layers for depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Previous Cloud 1 */}
                <div className="absolute top-[10%] -left-64 w-[500px] h-48 bg-white/10 blur-[120px] rounded-full animate-cloud-slow" />

                {/* New Cloud 2 */}
                <div className="absolute top-[35%] -right-64 w-[450px] h-40 bg-white/10 blur-[100px] rounded-full animate-cloud-slower" style={{ animationDelay: '-15s' }} />

                {/* Extra Accent Cloud */}
                <div className="absolute bottom-[10%] left-[20%] w-[400px] h-32 bg-white/5 blur-[90px] rounded-full animate-cloud-slow" style={{ animationDelay: '-5s' }} />
            </div>

            {/* Sunlight Radial Gradient Overlay */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full min-h-screen flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Background;
