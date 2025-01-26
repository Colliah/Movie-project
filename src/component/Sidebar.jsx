import { Banana, ChevronDown, ChevronUp, Clapperboard, Film, Menu, Popcorn, Search, Tv } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchSite from "./SearchSite";
import { useTheme } from "./ThemeContext";


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

const Sidebar = () => {
    const [showMenuIndex, setShowMenuIndex] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false); // search
    const toggleSearchSite = () => setIsSearchOpen(!isSearchOpen); // search

    const { isDarkMode, toggleTheme } = useTheme(); // Lấy trạng thái dark mode từ context
    return (
        <>
            {/* Button to open sidebar */}
            <button
                onClick={toggleSidebar}
                className="md:hidden p-4 text-black dark:text-white   top-4 right-4 z-0"
            >
                <Banana />
            </button>

            {/* Sidebar overlay */}
            <div
                className={` inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 
                ${isOpen ? "block" : "hidden"}`}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 w-full h-full bg-white dark:bg-black transform transition-all duration-300 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 bg-white dark:bg-black  ">
                    <h2 className="text-black dark:text-white text-xl underline font-bold"></h2>
                    <button onClick={toggleSidebar} className="text-black dark:text-white  text-4xl">
                        &times;
                    </button>
                </div>
                <div className="flex justify-around bg-white dark:bg-black">
                    <div className='flex items-center gap-x-2'>
                        <div
                            onClick={toggleSearchSite}
                            className='cursor-pointer text-black dark:text-white'
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
                <nav className="flex flex-col p-4 w-full h-full bg-white dark:bg-black">
                    <div className="flex flex-col space-y-4 items-start text-black dark:text-white">
                        {about.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-full"
                            >
                                <div
                                    onClick={() => setShowMenuIndex(showMenuIndex === index ? null : index)} // Toggle menu khi click
                                    className="flex font-bold gap-x-2 cursor-pointer items-center"
                                >
                                    {item.icon}
                                    {item.title}
                                    {item.children && (
                                        <span className="ml-auto">
                                            {showMenuIndex === index ? <ChevronDown /> : <ChevronUp />} {/* Biểu tượng chỉ báo */}
                                        </span>
                                    )}
                                </div>
                                {item.children && showMenuIndex === index && (
                                    <div
                                        className="mt-2 bg-gray-200 p-4 w-full rounded-md shadow-lg flex flex-col gap-2 max-h-64 overflow-y-auto"
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
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
