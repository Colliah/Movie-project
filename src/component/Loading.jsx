// Loading.js
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <motion.div
                className="text-8xl font-bold text-black dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <motion.span
                    className="inline-block"
                    style={{ display: 'inline-block' }}
                    initial={{ y: -10 }}
                    animate={{
                        y: [0, -10, 0],
                        transition: { duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }
                    }}
                >
                    I
                </motion.span>
                <motion.span
                    className="inline-block ml-8"
                    initial={{ y: -10 }}
                    animate={{
                        y: [0, -10, 0],
                        transition: { duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay: 0.1 }
                    }}
                >
                    miss
                </motion.span>
                <motion.span
                    className="inline-block ml-8"
                    initial={{ y: -10 }}
                    animate={{
                        y: [0, -10, 0],
                        transition: { duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay: 0.2 }
                    }}
                >
                    you
                </motion.span>
                <motion.span
                    className="inline-block ml-8"
                    initial={{ y: -10 }}
                    animate={{
                        y: [0, -10, 0],
                        transition: { duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay: 0.3 }
                    }}
                >
                    {"<3"}
                </motion.span>
            </motion.div>
        </div>
    );
};

export default Loading;
