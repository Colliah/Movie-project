import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ name, image, slug }) => {
    return (
        <Link to={`/detail-mov/${slug}`} className="w-52">
            <div>
                <img src={image} alt={name} className="w-52 h-80 object-cover" />
            </div>
            <div className="w-full">
                <p className="text-lg font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden">{name}</p>
            </div>
        </Link>
    );
};

export default FilmCard;
