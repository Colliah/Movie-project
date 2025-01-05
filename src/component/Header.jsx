import { Clapperboard, Film, House, Menu, Popcorn, Search, Tv } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const about = [
    {
        title: "Home",
        icon: <House />,
        path: "/"
    },
    {
        title: "K-Drama",
        icon: <Clapperboard />,
        path: "/test"
    },
    {
        title: "C-Drama",
        icon: <Film />,
        path: "/test"
    },
    {
        title: " Cartoon",
        icon: <Popcorn />,
        path: "/test"
    },
    {
        title: "TV-Series",
        icon: <Tv />,
        path: "/test"
    },
    {
        title: " Genre",
        icon: <Menu />,
        path: "/test"
    },
]
const Header = () => {
    return (
        <div className=' flex bg-gray-500 items-center justify-between'>
            <div className='ml-20' >
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/like--v1.png" alt="logo" />
            </div>
            <div className='flex items-center '>
                <input type="search" name="" id="" placeholder='Movie name wanna look for ?' className='w-80 h-8 p-2 rounded-md outline-none' />
                {/* <Search /> */}
            </div>
            <div className='flex space-x-16 items-center mr-40'>
                {about.map((item, index) => (
                    <div
                        key={index}
                    >
                        <a href={item.path} className='flex gap-x-2'>
                            {item.icon}
                            {item.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header