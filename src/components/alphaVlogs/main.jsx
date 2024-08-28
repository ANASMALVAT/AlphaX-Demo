import React, { useState, useEffect, useLayoutEffect } from 'react';
import AlphaNavbar from '../../layouts/navbar/AlphaNavbar';
import AlphaFooter from '../../layouts/footer/AlphaFooter';
import AlphaVlogs from './vlogs/alphaVlogs';
import AlphaBlogs from './blogs/alphaBlogs';
import { fetchAlphaBlog } from '../../services/fetchAlphaBlogs';
import { toast } from 'react-toastify';

const AlphaVlogsMain = () => {
    const [isXvlogSet, setIsXvlogSet] = useState(true);
    const [blogList, setBlogList] = useState([]); 

    useEffect(() => {
        const xvlogs = sessionStorage.getItem('xvlogs');
        if (xvlogs !== null) {
            setIsXvlogSet(xvlogs === 'true');
        } else {
            sessionStorage.setItem('xvlogs', true);
        }
    }, []);

    useLayoutEffect(() => {
        fetchAlphaBlog()
            .then(blogList => {
                setBlogList(blogList);
            })
            .catch(error => {
                toast.error("Error fetching blog list!"); 
            });
    }, []);

    const setVlogsTrue = () => {
        sessionStorage.setItem('xvlogs', true);
        setIsXvlogSet(true);
    }

    const setVlogsFalse = () => {
        sessionStorage.setItem('xvlogs', false);
        setIsXvlogSet(false);
    }

    return (
        <>
            <AlphaNavbar />
            <div className='flex flex-col gap-4 min-h-screen min-w-screen items-center mt-4'>
                <div className='flex gap-2 w-60 h-12 bg-[#15314B] rounded-[0.25rem] p-1'>
                    <button onClick={setVlogsTrue} className={`w-1/2 h-full rounded-[0.25rem] ${isXvlogSet ? 'bg-[#626EE3]' : 'bg-transparent'}`}>
                        <h1 className='text-white text-lg'>Xvlogs</h1>
                    </button>
                    <button onClick={setVlogsFalse} className={`w-1/2 h-full rounded-[0.25rem] ${!isXvlogSet ? 'bg-[#626EE3]' : 'bg-transparent'}`}>
                        <h1 className='text-white text-lg'>Xblogs</h1>
                    </button>
                </div>
                <div className='w-full h-full'>
                    {isXvlogSet ? <AlphaVlogs /> : <AlphaBlogs blogList={blogList} />}
                </div>
            </div>
            <AlphaFooter />
        </>
    );
}

export default AlphaVlogsMain;
