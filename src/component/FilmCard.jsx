import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ name, image, slug }) => {
    return (
        <Link
            unoptimized
            to={`/detail-mov/${slug}`}
            className="w-full h-full  border-2 gap-2 border-stone-600 rounded-md relative group overflow-hidden dark:border-white"
        >
            {/* Hình ảnh */}
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
            {/* Tên phim */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white">
                <p className="p-3  text-sm font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden">
                    {name}
                </p>
            </div>
            {/* Lớp nền đen khi hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </Link>
    );
};

export default FilmCard;
