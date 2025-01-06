import React from 'react'
import Header from '../component/Header'
import MovieList from '../component/MovieList'
import Slider from '../component/Slider'

const HomePage = () => {
    return (
        <div className=''>
            <div className=''>
                <Slider />
            </div>
            <div className='mt-10'>
                <MovieList />
            </div>
        </div>
    )
}

export default HomePage