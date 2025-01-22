import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import { movieApi } from "../api/movie";

const path = "https://img.ophim.live/uploads/movies/"

const MovieList = ({ items, path }) => {
    return (
        <div className=" bg-white dark:bg-black dark:text-white">
            <div className="container mx-auto flex  flex-col ">
                <div className="grid grid-cols-6 gap-4 place-items-center">
                    {items.length > 0 ? (
                        items.map((movie, index) => (
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
            </div>
        </div>
    );
};

export default MovieList;
