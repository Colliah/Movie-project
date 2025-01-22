import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';  // import ThemeContext
import SearchSite from './SearchSite';
import { Clapperboard, Film, Menu, Popcorn, Search, Tv } from 'lucide-react';

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
            <div className='container mx-auto w-full flex bg-white text-black items-center justify-between dark:bg-black dark:text-white'>
                <div>
                    <Link to="/">
                        <img
                            src={isDarkMode ? "../../public/Image/blacklogo.png" : "../../public/Image/whitelogo.png"}
                            // src={isDarkMode ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FumO9nuURSgAVA78eMfhYElZLtUDgvJaAA&s" : "https://dynamic.brandcrowd.com/asset/logo/00606750-f97c-45df-bc9c-f6d2b199eb36/logo?logoTemplateVersion=2&v=638694074541070000"}
                            alt="logo"
                            className='w-28'
                        />
                    </Link>
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
                                    className={`absolute top-6 right-0 bg-gray-200 p-4 pt-4  w-max z-50 rounded-md shadow-lg grid grid-cols-3 gap-4 transition-opacity duration-300 ${showMenuIndex === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
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

                <div className='flex items-center gap-x-2'>
                    <div
                        onClick={toggleSearchSite}
                        className='cursor-pointer'
                    >
                        <Search />
                    </div>
                </div>

                <SearchSite
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                    toggleSearchSite={toggleSearchSite}
                />

                {/* Thêm nút chuyển đổi Dark Mode */}
                <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
                    <span className="text-xl">{isDarkMode ? "🌙" : "☀️"}</span> {/* Biểu tượng chuyển chế độ */}
                </div>
            </div>
        </div>
    );
};

export default Header;
