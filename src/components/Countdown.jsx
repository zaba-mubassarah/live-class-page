import React from 'react';
import useCountdown from '../hooks/useCountdown';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
    const timeLeft = useCountdown(targetDate);

    if (!timeLeft) return null;

    const variants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="rounded mb-4 text-lg text-left"
        >
            <p className="text-gray-600 text-sm mb-2">Offer ends in:</p>
            <div className="flex gap-4">
                <motion.div
                    variants={variants}
                    className="text-left border p-4 rounded-lg"
                    style={{ boxShadow: '0 0 6px #fff' }} // Updated glow effect
                >
                    <div className="font-bold text-2xl">{timeLeft.days}</div>
                    <div className="text-sm text-gray-500">Days</div>
                </motion.div>
                <motion.div
                    variants={variants}
                    className="text-left border p-4 rounded-lg"
                    style={{ boxShadow: '0 0 6px #fff' }} // Updated glow effect
                >
                    <div className="font-bold text-2xl">{timeLeft.hours}</div>
                    <div className="text-sm text-gray-500">Hours</div>
                </motion.div>
                <motion.div
                    variants={variants}
                    className="text-left border p-4 rounded-lg"
                    style={{ boxShadow: '0 0 6px #fff' }} // Updated glow effect
                >
                    <div className="font-bold text-2xl">{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                </motion.div>
                <motion.div
                    variants={variants}
                    className="text-left border p-4 rounded-lg"
                    style={{ boxShadow: '0 0 6px #fff' }} // Updated glow effect
                >
                    <div className="font-bold text-2xl">{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-500">Seconds</div>
                </motion.div>
            </div>
        </motion.div>
    );
}
