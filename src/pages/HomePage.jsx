import React, { useEffect, useState } from 'react'
import MovieList from '../component/MovieList'
import Slider from '../component/Slider'
import { movieApi } from '../api/movie'
const path = "https://img.ophim.live/uploads/movies/"
const HomePage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await movieApi.home();
                setMovies(response.data.items);
                console.log(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [])
    return (
        <div className=' bg-white py-10'>
            <div className=''>
                {/* <Slider items={movies} path={path} /> */}
            </div>
            <div className='p-6 text-black'>
                <MovieList items={movies} path={path} />
            </div>
        </div>
    )
}

export default HomePage