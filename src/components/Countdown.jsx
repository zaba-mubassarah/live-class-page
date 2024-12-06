import React from 'react';
import useCountdown from '../hooks/useCountdown';

export default function Countdown({ targetDate }) {
    const timeLeft = useCountdown(targetDate);

    if (!timeLeft) return null;

    return (
        <div className="rounded mb-4 text-sm">
            <p className="text-gray-600 text-xs mb-1 text-center">Offer ends in:</p>
            <div className="flex justify-center gap-2">
                <div className="text-center border p-2 rounded">
                    <div className="font-bold">{timeLeft.days}</div>
                    <div className="text-[10px] text-gray-500">Days</div>
                </div>
                <div className="text-center border p-2 rounded">
                    <div className="font-bold">{timeLeft.hours}</div>
                    <div className="text-[10px] text-gray-500">Hours</div>
                </div>
                <div className="text-center border p-2 rounded">
                    <div className="font-bold">{timeLeft.minutes}</div>
                    <div className="text-[10px] text-gray-500">Minutes</div>
                </div>
                <div className="text-center border p-2 rounded">
                    <div className="font-bold">{timeLeft.seconds}</div>
                    <div className="text-[10px] text-gray-500">Seconds</div>
                </div>
            </div>
        </div>
    );
}
