
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import myPic from '../assets/Mansi.jpeg';

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
      className='min-h-screen flex flex-col items-center justify-center text-white p-4 font-mono' style={{ backgroundImage: "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 10, type: 'spring', stiffness: 50 }}
        className='flex items-center space-x-4'
      >
      <motion.img
  src="https://img.freepik.com/free-vector/cute-robot-wearing-hat-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5186.jpg?t=st=1717238564~exp=1717242164~hmac=3b79b543c7e26eff2b46215c4e3672cb139e46a4325073cd38cc9743d94c74a3&w=1380"
  alt="Mansi"
  className='h-48 w-48 rounded-full shadow-lg'
  animate={{
    y: ["0%", "-10%", "0%"],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.5, 1],
    repeat: Infinity,
    repeatType: "reverse", // This makes the animation reverse after completing
    delay: 0,
  }}
/>




        <div className='flex flex-col'>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            className='text-3xl md:text-5xl mt-0 font-bold'
          >
            <motion.span variants={letterVariants}>H</motion.span>
            <motion.span variants={letterVariants}>i</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={letterVariants}>I</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={letterVariants}>a</motion.span>
            <motion.span variants={letterVariants}>m</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={letterVariants}>M</motion.span>
            <motion.span variants={letterVariants}>a</motion.span>
            <motion.span variants={letterVariants}>n</motion.span>
            <motion.span variants={letterVariants}>s</motion.span>
            <motion.span variants={letterVariants}>i</motion.span>
            <span>&nbsp;</span>
            <motion.span variants={letterVariants}>B</motion.span>
            <motion.span variants={letterVariants}>a</motion.span>
            <motion.span variants={letterVariants}>k</motion.span>
            <motion.span variants={letterVariants}>s</motion.span>
            <motion.span variants={letterVariants}>h</motion.span>
            <motion.span variants={letterVariants}>i</motion.span>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            className='text-5xl mt-4 max-w-md text-center'
          >
            <motion.span variants={letterVariants}>a</motion.span>&nbsp;
            <motion.span variants={letterVariants}>w</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>
            <motion.span variants={letterVariants}>b</motion.span>&nbsp;
            <motion.span variants={letterVariants}>d</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>
            <motion.span variants={letterVariants}>v</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>
            <motion.span variants={letterVariants}>l</motion.span>
            <motion.span variants={letterVariants}>o</motion.span>
            <motion.span variants={letterVariants}>p</motion.span>
            <motion.span variants={letterVariants}>e</motion.span>
            <motion.span variants={letterVariants}>r</motion.span>
            <motion.span variants={letterVariants}>,</motion.span>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            className='text-lg mt-4 max-w-md text-center'
          >
           "Envisioning possibilities and realizing them through the power of code and imagination."
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
