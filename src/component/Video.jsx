import React from 'react'
const Video = ({ videoUrl }) => {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center space-y-8">
            {videoUrl ? (
                <iframe
                    src={videoUrl}
                    className="h-[180px] aspect-video md:h-[400px] lg:h-[550px] xl:h-[700px] "
                    allowFullScreen
                    title="Video Player"
                />
            ) : (
                <div className='flex justify-center items-center text-white'>No video available</div>
            )}
        </div>
    )
}

export default Video