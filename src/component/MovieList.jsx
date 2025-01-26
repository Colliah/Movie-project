import React from "react";
import FilmCard from "./FilmCard";

const MovieList = ({ items, path }) => {
    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className="container mx-auto flex flex-col ">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6   ">
                    {items.length > 0 ? (
                        items.map((movie, index) => (
                            <FilmCard
                                unoptimized
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
