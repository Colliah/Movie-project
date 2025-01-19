import React, { useEffect, useState } from 'react'
import { movieApi } from '../api/movie'
import { useParams } from 'react-router-dom'
import BackgroundMov from '../component/BackgroundMov';
import MovieInfo from '../component/MovieInfo';
import Episode from '../component/Episode';

const path = "https://img.ophim.live/uploads/movies/"

const DetailsMoviePage = () => {
    const [isOverviewVisible, setIsOverviewVisible] = useState(false); // State để toggle hiển thị
    const [isWatching, setIsWatching] = useState(false);
    const [videoURL, setVideoURL] = useState("");//string
    const [movies, setMovies] = useState([])
    const { movieSlug: slug } = useParams()

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

    const handleEpisode = (link) => {
        setVideoURL(link);
        setIsWatching(true);
    }

    return (
        <div className='w-full h-full relative py-10 '>
            {/* Vùng chứa poster_url */}
            <BackgroundMov imgbg={`${path}${movies.poster_url}`} />
            <MovieInfo item={movies} />
            <Episode items={movies} />
        </div>
    )
}

export default DetailsMoviePage