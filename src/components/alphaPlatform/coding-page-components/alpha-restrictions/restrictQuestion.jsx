import React from 'react'
import { Link } from 'react-router-dom';
const RestrictQuestion = () => {

    return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='text-center'>
                    <h5 className=" flex flex-col text-xl font-normal tracking-tight text-white">
                        <p>
                           Question does not exist, check out our question list.
                        </p>
                    </h5>
                </div>
                <Link to="/problems">
                    <button  className={`alpha-info-button overflow-hidden mt-8 w-60  mr-2 flex flex-row items-center rounded-sm px-6 py-4 font-mono font-normal justify-center hover:duration-100 text-xl text-white bg-[#4C5ADF] border-b-8 border-[#2d33ca]`}>
                        Explore Problems
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default RestrictQuestion;