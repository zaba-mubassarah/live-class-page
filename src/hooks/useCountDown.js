import { useState, useEffect } from 'react';

function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}

export default function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeLeft = calculateTimeLeft(targetDate);
            setTimeLeft(updatedTimeLeft);

            if (Object.keys(updatedTimeLeft).length === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}
