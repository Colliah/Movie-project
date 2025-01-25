import React from 'react';

const BackgroundMov = ({ imgbg }) => {
    return (
        <div className='absolute inset-0 z-10'>
            {/* Poster URL */}
            <div className='w-full z-20 h-52 sm:h- md:h-96 lg:h-128 xl:h-full overflow-hidden'>
                <img 
                    src={imgbg} 
                    alt="Background Movie" 
                    className='w-full h-full object-cover object-center' 
                />
            </div>
            {/* Lớp che màu đen */}
            <div className='absolute w-full h-52 sm:h-64 md:h-96 lg:h-128 xl:h-full inset-0 bg-black/60'></div>
        </div>
    )
}

export default BackgroundMov;
