import React, { useState } from "react";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

import "./styles/componentExplore.css"

const ComponentExplore = () => {

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const sentenceVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1, 
        type: 'spring',
        stiffness: 100,
      },
    },
  };
    return (
        <>
        
        <motion.div 
        initial="initial"
        animate="animate"
        variants={sentenceVariants}
        ref={ref} className=" w-full max-w-[1700px] m-auto bg-algoblack flex flex-col items-center mb-4 ">
                <div className=" what-is-alpha z-[1]">
                    <h1 className="h1-tag text-white mb-4  ">What is Alpha Algo?</h1>
                </div>
        </motion.div>
        </>
    )

}

export default ComponentExplore;