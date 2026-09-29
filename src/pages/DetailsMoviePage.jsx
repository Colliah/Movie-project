import React, { useEffect, useState } from 'react'
import { movieApi } from '../api/movie'
import { useParams } from 'react-router-dom'
import BackgroundMov from '../component/BackgroundMov';
import MovieInfo from '../component/MovieInfo';
import Episode from '../component/Episode';
import Video from '../component/Video';
import Loading from '../component/Loading';
import { getMovieImageUrl } from '../api/config';

const DetailsMoviePage = () => {
    const [isOverviewVisible, setIsOverviewVisible] = useState(false); // State để toggle hiển thị
    const [isWatching, setIsWatching] = useState(false);
    const [videoURL, setVideoURL] = useState("");//string
    const [movies, setMovies] = useState([])
    const { movieSlug: slug } = useParams()

    const [loading, setLoading] = useState(false)//loading

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const response = await movieApi.getMovieDetail(slug);
                setMovies(response.data.item);
                console.log(response.data);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchMovies();
    }, [slug])

    const handleEpisode = (link) => {
        setVideoURL(link);
        setIsWatching(true);
    }

    return (
        <div className='w-full h-full bg-black relative py-24 '>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <BackgroundMov imgbg={getMovieImageUrl(movies.poster_url)} />
                        <MovieInfo item={movies} />
                        <Episode items={movies} onEpisodeClick={handleEpisode} />
                        <div className='w-full bg-black mt-30'>
                            <Video videoUrl={videoURL} />
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default DetailsMoviePage
