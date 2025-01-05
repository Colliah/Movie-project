import React from "react";

const FilmCard = ({ name, slug, image }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div>
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <p className="text-gray-500 text-sm mt-1">{slug}</p>
            </div>
        </div>
    );
};

export default FilmCard;
