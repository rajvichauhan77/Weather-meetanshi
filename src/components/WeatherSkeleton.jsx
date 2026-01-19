import React from 'react';

const WeatherSkeleton = () => {
    return (
        <div className="w-full max-w-full mx-auto pt-8 pb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start w-full">

                {/* LEFT COLUMN: Skeleton Boxes (Slides in from LEFT) */}
                <div className="flex flex-col gap-6 order-2 lg:order-1 animate-slide-left">
                    {/* Big Box Skeleton */}
                    <div className="relative bg-white/40 rounded-[2.5rem] pt-10 pb-4 h-[350px] w-full overflow-hidden">
                        <div className="absolute inset-0 animate-skeleton-shimmer" />
                        <div className="flex flex-col items-center">
                            <div className="h-4 w-32 bg-gray-300/50 rounded-full mb-8" />
                            <div className="h-32 w-48 bg-gray-300/50 rounded-2xl mb-12" />
                            <div className="h-20 w-full bg-gray-200/30 mt-auto" />
                        </div>
                    </div>

                    {/* Three Parts Temp Skeleton */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white/30 rounded-[1.8rem] h-36 relative overflow-hidden">
                                <div className="absolute inset-0 animate-skeleton-shimmer" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CENTER COLUMN: Skeleton Info (Fades UP) */}
                <div className="flex flex-col items-center text-center py-6 order-1 lg:order-2 animate-fade-up">
                    <div className="mb-8 w-full pt-10">
                        <div className="flex flex-col items-center mb-10 gap-4">
                            <div className="h-16 w-64 bg-white/20 rounded-2xl animate-skeleton-shimmer" />
                            <div className="h-8 w-40 bg-white/10 rounded-xl animate-skeleton-shimmer" />
                        </div>

                        <div className="h-[300px] w-full bg-white/5 rounded-[3rem] relative overflow-hidden">
                            <div className="absolute inset-0 animate-skeleton-shimmer" />
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Skeleton Stats (Slides in from RIGHT) */}
                <div className="flex flex-col gap-6 order-3 lg:order-3 animate-slide-right">
                    <div className="bg-white/20 rounded-[3rem] h-[180px] relative overflow-hidden">
                        <div className="absolute inset-0 animate-skeleton-shimmer" />
                    </div>
                    <div className="bg-white/20 rounded-[3rem] h-[400px] relative overflow-hidden">
                        <div className="absolute inset-0 animate-skeleton-shimmer" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherSkeleton;
