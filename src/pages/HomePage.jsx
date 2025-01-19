import React, { useEffect, useState } from 'react'
import MovieList from '../component/MovieList'
import Slider from '../component/Slider'
import { movieApi } from '../api/movie'
import { useParams } from 'react-router-dom'

const path = "https://img.ophim.live/uploads/movies/"

const isCategoryPage = (pathname) => {
    return pathname.startsWith("/the-loai/");
}
const HomePage = () => {
    const [movies, setMovies] = useState([])
    const { slug: slug, page: pageParam } = useParams()
    const currentPage = parseInt(pageParam || "1", 10);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let res;
                if (isCategoryPage(location.pathname) && slug) {
                    res = await movieApi.getCategoryMovies(slug, currentPage || 1);
                }
                else if (slug) {
                    res = await movieApi.getTypesMovies(slug, currentPage || 1);
                }
                else {
                    res = await movieApi.home();
                }
                setMovies(res.data.items);
                console.log(res.data);
            }

            catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [slug,currentPage])
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