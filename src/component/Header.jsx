import { Clapperboard, Film, House, Menu, Popcorn, Search, Tv } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const about = [
    {
        title: "Home",
        icon: <House />,
        path: "/"
    },
    {
        title: "Movie",
        icon: <Clapperboard />,
        path: "/phim-bo"
    },
    {
        title: "Film",
        icon: <Film />,
        path: "/phim-le"
    },
    {
        title: " Cartoon",
        icon: <Popcorn />,
        path: "/hoat-hinh"
    },
    {
        title: "TV-Series",
        icon: <Tv />,
        path: "/tv-shows"
    },
    {
        title: " Genre",
        icon: <Menu />,
        children: [
            { title: "Action", path: "/the-loai/hanh-dong" },
            { title: "Romance", path: "/the-loai/tinh-cam" },
            { title: "Comedy", path: "/the-loai/hai-huoc" },
            { title: "Historical", path: "/the-loai/co-trang" },
            { title: "Psychological", path: "/the-loai/tam-ly" },
            { title: "Crime", path: "/the-loai/hinh-su" },
            { title: "War", path: "/the-loai/chien-tranh" },
            { title: "Sports", path: "/the-loai/the-thao" },
            { title: "Martial Arts", path: "/the-loai/vo-thuat" },
            { title: "Sci-Fi", path: "/the-loai/vien-tuong" },
            { title: "Adventure", path: "/the-loai/phieu-luu" },
            { title: "Science", path: "/the-loai/khoa-hoc" },
            { title: "Horror", path: "/the-loai/kinh-di" },
            { title: "Music", path: "/the-loai/am-nhac" },
            { title: "Mythology", path: "/the-loai/than-thoai" },
            { title: "Documentary", path: "/the-loai/tai-lieu" },
            { title: "Family", path: "/the-loai/gia-dinh" },
            { title: "Drama", path: "/the-loai/chinh-kich" },
            { title: "Mystery", path: "/the-loai/bi-an" },
            { title: "School", path: "/the-loai/hoc-duong" },
            { title: "Classic", path: "/the-loai/kinh-dien" },
            { title: "18+ Movies", path: "/the-loai/phim-18" },
        ],
    },
]

const Header = () => {
    const [showMenuIndex, setShowMenuIndex] = useState(null);

    return (
        <div className='w-full flex bg-white text-black items-center justify-between'>
            <div className='ml-20' >
                <Link to="/">
                    <img width="100" height="100" src="https://thumbs.dreamstime.com/b/i-miss-you-sad-emoji-symbol-black-white-colors-loving-people-who-their-loved-ones-wanna-give-design-to-show-229552075.jpg" alt="logo" className='bg-white' />
                </Link>
            </div>
            <div className='flex items-center gap-x-2 '>
                <input type="search" name="" id="" placeholder='Movie name wanna look for ?' className='w-80 h-10 p-2 text-black rounded-md border border-stone-600	 text-sm outline-none' />
            </div>
            <div className='flex space-x-16 items-center mr-40'>
                {about.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => item.children && setShowMenuIndex(index)}
                        onMouseLeave={() => setShowMenuIndex(null)}
                        className="relative"
                    >
                        <Link to={item.path || "#"} className='flex font-bold gap-x-2'>
                            {item.icon}
                            {item.title}
                        </Link>

                        {item.children && (
                            <div
                                className={`absolute top-6 right-0 bg-gray-200 p-4 pt-4  w-max z-50 rounded-md shadow-lg grid grid-cols-3 gap-4 transition-opacity duration-300 ${showMenuIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
                                    }`}
                            >
                                {item.children.map((child, childIndex) => (
                                    <NavLink
                                        key={childIndex}
                                        to={child.path}
                                        className={({ isActive }) =>
                                            `text-black font-bold ${isActive ? "underline" : ""}`
                                        }
                                    >
                                        {child.title}
                                    </NavLink>
                                ))}
                            </div>
                        )}


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;
