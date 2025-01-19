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
        path: "/k-drama"
    },
    {
        title: "C-Drama",
        icon: <Film />,
        path: "/c-drama"
    },
    {
        title: " Cartoon",
        icon: <Popcorn />,
        path: "/cartoon"
    },
    {
        title: "TV-Series",
        icon: <Tv />,
        path: "/tv-series"
    },
    {
        title: " Genre",
        icon: <Menu />,
        path: ""
    },
]
const Header = () => {
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
                    >
                        <Link to={item.path} className='flex font-bold gap-x-2'>
                            {item.icon}
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header