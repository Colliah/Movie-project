import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const path = "https://img.ophim.live/uploads/movies/"

const BackgroundMov = ({ imgbg }) => {
    return (
        <div className='absolute inset-0 -z-10'>
            {/* Poster URL */}
            <div className='w-full h-full overflow-hidden'>
                <img src={imgbg} alt="" className='w-full h-full object-cover' />
            </div>
            {/* Lớp che màu đen */}
            <div className='absolute inset-0 bg-black/60'></div>
        </div>
    )
}
export default BackgroundMov