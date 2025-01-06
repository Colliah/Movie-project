import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import { movieApi } from "../api/movie";

const path = "https://img.ophim.live/uploads/movies/"

const MovieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await movieApi.home();
                setMovies(res.data.items);
                console.log(res.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [])
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <FilmCard
                        key={index}
                        name={movie.name}
                        slug={movie.slug}
                        image={`${path}${movie.thumb_url}`}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500 col-span-full">
                    Không có bộ phim nào để hiển thị.
                </p>
            )}
        </div>
    );
};

export default MovieList;
