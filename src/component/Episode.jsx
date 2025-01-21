import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Episode = ({ items, onEpisodeClick }) => {
    const { movieSlug: slug } = useParams()
    return (
        <div className='container mt-20 mx-auto'>
            {/* Các tập phim */}
            <div className="flex gap-2 flex-wrap">
                {items.episodes?.[0].server_data.map((item, index) => (
                    <Link
                        key={index}
                        to={`/detail-mov/${slug}/ep=${item.name}`}
                        onClick={() => onEpisodeClick(item.link_embed)}//func
                        className='px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Episode