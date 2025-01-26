import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';  // import ThemeContext
import SearchSite from './SearchSite';
import { Clapperboard, Film, Menu, Popcorn, Search, Tv } from 'lucide-react';
import Sidebar from './Sidebar'

const about = [
    // Các mục trong menu của bạn
    {
        title: "Movie",
        icon: <Clapperboard />,
        path: "/danh-sach/phim-bo"
    },
    {
        title: "Film",
        icon: <Film />,
        path: "/danh-sach/phim-le"
    },
    {
        title: "Cartoon",
        icon: <Popcorn />,
        path: "/danh-sach/hoat-hinh"
    },
    {
        title: "TV-Series",
        icon: <Tv />,
        path: "/danh-sach/tv-shows"
    },
    {
        title: "Genre",
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
];

const Header = () => {
    const [showMenuIndex, setShowMenuIndex] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // search
    const { isDarkMode, toggleTheme } = useTheme(); // Lấy trạng thái dark mode từ context

    const toggleSearchSite = () => setIsSearchOpen(!isSearchOpen); // search

    return (
        <div className={`dark:bg-black dark:text-white ${isDarkMode ? "dark" : ""}`}>
            <div className="container mx-auto w-full flex flex-wrap items-center justify-between bg-white text-black dark:bg-black dark:text-white px-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src={isDarkMode ? "/Image/blacklogo.png" : "/Image/whitelogo.png"}
                            alt="logo"
                            className="w-16 md:w-20 lg:w-24 xl:w-28"
                        />
                    </Link>
                </div>

                {/* Menu chính */}
                <div className="hidden md:flex space-x-8 lg:space-x-20 lg:ml-8 xl:space-x-28 text-sm items-center mr-auto ">
                    {about.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => item.children && setShowMenuIndex(index)}
                            onMouseLeave={() => setShowMenuIndex(null)}
                            className="relative"
                        >
                            <Link to={item.path || "#"} className="flex font-bold gap-x-2">
                                {item.icon}
                                {item.title}
                            </Link>
                            {item.children && (
                                <div
                                    className={`absolute top-8 right-0 bg-gray-200 p-4 w-max z-50 rounded-md shadow-lg grid grid-cols-3 gap-4 transition-opacity duration-300 ${showMenuIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
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

                {/* Nút tìm kiếm */}
                <div className='md:flex gap-x-4 xl:gap-x-40'>
                    <div className="hidden md:flex items-center gap-x-2">
                        <div onClick={toggleSearchSite} className="cursor-pointer">
                            <Search />
                        </div>
                    </div>

                    {/* Component tìm kiếm */}
                    <SearchSite
                        isSearchOpen={isSearchOpen}
                        setIsSearchOpen={setIsSearchOpen}
                        toggleSearchSite={toggleSearchSite}
                    />

                    {/* Nút chuyển đổi Dark Mode */}
                    <div className="hidden md:flex items-center cursor-pointer" onClick={toggleTheme}>
                        <span className="text-xl">{isDarkMode ? "🌙" : "☀️"}</span>
                    </div>
                </div>
                <div className='z-50'>
                    <Sidebar />
                </div>
            </div>
        </div>

    );
};

export default Header;
