import { motion } from 'framer-motion';
import Countdown from './Countdown';

export default function Hero({ title, description, targetDate }) {

  return (
    <div className="relative text-white flex pl-4">
      <div className="px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto min-h-90">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl lg:text-base mb-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
}
