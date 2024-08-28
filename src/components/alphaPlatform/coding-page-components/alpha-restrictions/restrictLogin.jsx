import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelLoginWindowTrue } from '../../../../redux/slices/userLoginWindow';

const RestrictLogin = () => {

    const dispatch = useDispatch();
    
    const showLogin = () => {
        dispatch(toggelLoginWindowTrue());
    }

    return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='h-40 w-40 mb-4'>
                <img src='https://www.svgrepo.com/show/408465/lock-security-open.svg'></img>
                </div>
                <div className='text-center' onClick={showLogin}>
                    <h2 className=" flex text-2xl font-normal tracking-tight text-white">
                        <p onClick={showLogin} className=" cursor-pointer font-mono font-bold text-2xl text-[#4C5ADF]  mr-1"> Login </p>
                        <p className=' '>
                            to X
                        </p>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default RestrictLogin;