import React from 'react'
import AlphaBlogCard from './alphaBlogCard';
const AlphaBlogs = ({blogList}) => {

    return (
        <div className=' min-w-screen min-h-screen max-w-[1400px] m-auto flex flex-wrap  justify-center mt-10 p-2 px-4 gap-8 mb-12'> 
            {
                Array.from({ length: blogList.length }, (_, index) => (
                    <a href={blogList[index].blog_url} target='_blank'>
                        <AlphaBlogCard key={index} blog={blogList[index]} />
                    </a>
                ))
            }
      </div>
    )
}

export default AlphaBlogs;