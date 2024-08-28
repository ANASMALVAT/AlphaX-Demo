import React from 'react'
import { Link } from 'react-router-dom';

const RestrictUnauthorized = () => {

    return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='h-40 w-40 mb-4'>
                <img src='https://alpha-images.s3.amazonaws.com/unauthorized.svg'></img>
                </div>
                <div className='text-center'>
                    <h5 className=" flex text-3xl font-normal tracking-tight text-white">
                        <Link to = "/purchase">
                            <p className=" font-mono font-bold text-3xl text-[#4C5ADF]  mr-1"> purchase</p>
                        </Link>
                        <p className=''>
                           to access the question.
                        </p>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default RestrictUnauthorized;