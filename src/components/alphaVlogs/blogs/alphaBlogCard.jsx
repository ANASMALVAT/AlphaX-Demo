import React from 'react'

const AlphaBlogCard = ({blog}) => {

    return (
        <div  className=' w-[375px] sm:[400px] md:w-[425px] lg:w-[500px]  lg:h-[470px] rounded-md flex bg-[#f5f5f5] shadow-xl p-4  flex-col gap-2 cursor-pointer  '>
            <div className='blog-img rounded-md h-3/4'>
                <img className=' w-[400px] lg:w-[450px]  lg:h-full  rounded-md shadow-2xl hover:scale-[1.025] hover:duration-200' src={blog.blog_img}></img>
            </div>
            <div className=' blog-title mt-2 pl-2 w-full m-auto'>
                <h2 className='  text-algoblack text-lg  sm:text-lg font-semibold  text-left'>{blog.blog_title}</h2>
            </div>
            <div className=' blog-date pl-2 w-full m-auto' >
                <span className=' text-gray-500'>{blog.blog_date}</span>
            </div>
        </div>
    )
}

export default AlphaBlogCard;