import React from 'react';
import "./companiesComponent.css"
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';


const CompaniesComponent = () => {
    
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
    return (
            <motion.div 
            ref={ref}
            initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"spring",
                    stiffness:125,
                    delay:0.1,
                    duration:1,
                    
            }}
            className=' companies-container flex flex-wrap  justify-evenly w-[100%] bg-[#F5F5F5] max-w-[1400px] m-auto items-center'>
                    <div ref={ref} className='company-img flex items-center'>
                        <img src='https://alpha-images.s3.amazonaws.com/meta.png' alt="Meta"  />
                    </div>
                    <div ref={ref} className='company-img  flex items-center mt-2 '>
                        <img src='https://alpha-images.s3.amazonaws.com/amazon.png' alt="Amazon"  />
                    </div>
                    <div ref={ref} className='apple-img flex items-center  '>
                        <img src='https://alpha-images.s3.amazonaws.com/apple.png'  className='bg-transparent'  alt="Apple"  />
                    </div>
                    <div ref={ref} className='company-img flex items-center ' >
                        <img src='https://alpha-images.s3.amazonaws.com/netflix.png' alt="Netflix"  />
                    </div>
                    <div ref={ref} className='company-img flex items-center ' >
                        <img src='https://alpha-images.s3.amazonaws.com/google.png' alt="Google" />
                    </div>
            </motion.div>

    )

}

export default CompaniesComponent;