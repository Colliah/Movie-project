import React, { useEffect, useState } from 'react'
import MovieList from '../component/MovieList'
import { movieApi } from '../api/movie'
import { useParams } from 'react-router-dom'
import Pagination from '../component/Pagination'
import Loading from '../component/Loading'

const path = "https://img.ophim.live/uploads/movies/"

const isCategoryPage = (pathname) => {
    return pathname.startsWith("/the-loai/");
}

const HomePage = () => {

    const [fetchState, setFetchState] = useState({
        path: null,
        movies: [],
        totalPages: {
            totalItems: 0,
            itemsPerPage: 24,
            currentPage: 1,
            pageRanges: 5,
        },
    });

    const { slug, page: pageParam } = useParams();
    const currentPage = parseInt(pageParam || "1", 10);

    const [loading, setLoading] = useState(false)//loading

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                let res;
                if (isCategoryPage(location.pathname) && slug) {
                    res = await movieApi.getCategoryMovies(slug, currentPage || 1);
                } else if (slug) {
                    res = await movieApi.getTypesMovies(slug, currentPage || 1);
                } else {
                    res = await movieApi.home();
                }
                const params = res.data.params;
                setFetchState({
                    movies: res.data.items,
                    totalPages: {
                        totalItems: params?.pagination.totalItems || 0,
                        itemsPerPage: 24,
                        currentPage: params?.pagination.currentPage || 1,
                        pageRanges: 5,
                    },
                    path: res.data.seoOnPage.og_url,
                });
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false)
            }
        };
        fetchMovies();
    }, [slug, currentPage]);

    return (
        <div className=' bg-white py-10'>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <div className=''>
                            {/* <Slider items={movies} path={path} /> */}
                        </div>
                        <div className='p-6 text-black'>
                            <MovieList items={fetchState.movies} path={path} />
                        </div>
                        {
                            //trang chu ko cho chuyen trang
                            slug !== undefined && fetchState.totalPages.totalItems > 0 && (
                                <div>
                                    <Pagination
                                        currentPage={fetchState.totalPages.currentPage}
                                        totalPages={Math.ceil(fetchState.totalPages.totalItems / fetchState.totalPages.itemsPerPage)}
                                        baseUrl={fetchState.path}
                                    />
                                </div>
                            )
                        }
                        {/* <div className="flex justify-center items-center h-screen">
                <Loading />
            </div> */}
                    </>
                )

            }
        </div>
    );
};

export default HomePage;
