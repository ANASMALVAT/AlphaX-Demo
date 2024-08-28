import React from 'react'
import DefaultCard from './cardComponent'
import { features } from '../../../../data/homeFeatures'
import ComponentExplore from './componentExplore'
import "./styles/componentCardGrid.css"



const ComponentCardGrid = () => {


    return (
        <>  
            <div className='flex-col who-we-are mb-4 w-full max-w-[1450px] m-auto justify-center border-none z-[1]'>
                <ComponentExplore/>
                <div className='card-items flex flex-wrap   gap-2 h-full justify-center mx-auto mt-4 ' >
                        {
                            features.map((value,index) => {
                                    return < DefaultCard key={index} features={value} />
                            })
                        }
                </div>
            </div>
            
        </>
    )
}

export default ComponentCardGrid;