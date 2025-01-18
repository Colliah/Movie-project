import React, { useEffect, useState } from 'react'
import { movieApi } from '../api/movie'
import { Link, useParams } from 'react-router-dom'

const path = "https://img.ophim.live/uploads/movies/"

const DetailsMoviePage = () => {
    const [movies, setMovies] = useState([])
    const { movieSlug: slug } = useParams()
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await movieApi.getMovieDetail(slug);
                setMovies(response.data.item);
                console.log(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [])
    return (
        <div className='w-full h-[770px] relative'>
            <div className='absolute inset-0'>
                <img src={`${path}${movies.poster_url}`} alt="" className='w-full h-full object-cover' />
                <div className='absolute z-10 inset-0 bg-gradient-to-t from-black  to-transparent'></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                <h1 className="text-4xl font-bold mb-4">{movies.name}</h1>
                <div className='relative '>
                    <p className="text-lg">Số lượng tập: {movies.episode_total}</p>
                    {
                        movies.episodes?.[0].server_data.map((item, index) => (
                            <Link
                                key={index}
                                to={`/detail-mov/${slug}/ep=${item.name}`}
                                className=''
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default DetailsMoviePage