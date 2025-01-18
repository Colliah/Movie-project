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
            {/* Vùng chứa poster_url */}
            <div className='absolute inset-0'>
                {/* Poster URL */}
                <img src={`${path}${movies.poster_url}`} alt="" className='w-full h-full object-cover' />
                {/* Lớp che màu đen */}
                <div className='absolute inset-0 bg-black/60'></div>
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-4 relative z-10 flex items-center top-20 justify-center h-full text-white px-4'>
                    <img
                        src={`${path}${movies.thumb_url}`}
                        alt={movies.name}
                        className="w-800 h-[600px] object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className='col-span-8 relative z-10 top-20 w-full h-full flex flex-col'>
                    <h1 className="text-5xl font-bold text-white text-left">{movies.name}</h1>
                    <div className='text-white'>
                        {/* Content:{movies.content} */}
                    </div>
                    <div className='flex gap-32 mt-10  text-xl'>
                        <div className='text-white'>
                            Quality:{movies.quality}
                        </div>
                        <div className='text-white'>
                            Release:{movies.year}
                        </div>
                        <div className='text-white'>
                            Language:{movies.lang}
                        </div>
                        <div className='text-white'>
                            Duration:{movies.time}
                        </div>
                    </div>
                    <div className='flex gap-32 mt-10  text-xl'>
                        {/* <div className='text-white'>
                        Category:{movies.category}
                         </div> */}
                        <div className='text-white'>
                            Status:{movies.status}
                        </div>
                    </div>
                    <div className='flex gap-32 mt-10  text-xl'>

                        <div className='text-white'>
                            Actor:{movies.actor}
                        </div>
                    </div>
                    <div className='relative mt-10  text-xl  '>
                        {/* Các tập phim */}
                        <p className="text-white mb-4">Episodes: {movies.episode_total}</p>
                        <div className=" flex gap-2 flex-wrap">
                            {movies.episodes?.[0].server_data.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/detail-mov/${slug}/ep=${item.name}`}
                                    className='px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsMoviePage