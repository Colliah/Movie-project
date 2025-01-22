import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ name, image, slug }) => {
    return (
        <Link to={`/detail-mov/${slug}`} className="w-52">
            <div className="border-4 border-stone-600 rounded-md relative group overflow-hidden dark:border-white">
                <div>
                    <img src={image} alt={name} className="w-52 h-80 object-cover" />
                </div>
                <div className="w-full">
                    <p className="m-2 text-lg font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden">
                        {name}
                    </p>
                </div>
                {/* Lớp nền đen */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                {/* Nút "More Details" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="p-2 text-black bg-white rounded-lg ">
                        More Details
                    </button>
                </div>
            </div>
        </Link>


    );
};

export default FilmCard;
