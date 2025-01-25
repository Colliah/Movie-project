import { ClipboardType } from 'lucide-react'
import React, { useState } from 'react'
const path = "https://img.ophim.live/uploads/movies/"
const removePTags = (html) => {
    const div = document.createElement("p");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};
//ban đầu là ko truyền props , nên theo API là movies , có tuyền props nên đổi movies thành item để dễ truy xuất (DetailMoviePage line 44)
const MovieInfo = ({ item }) => {
    const [isOverviewVisible, setIsOverviewVisible] = useState(false); // State để toggle hiển thị
    const toggleOverview = () => {
        setIsOverviewVisible((prev) => !prev);
    };
    return (
        <div className='container mx-auto flex flex-col text-white bg-black  gap-8 md:flex-col 2xl:flex-row '>
            <div className=' z-10 flex items-center justify-center  px-4 flex-shrink-0'>
                <img
                    src={`${path}${item.thumb_url}`}
                    alt={item.name}
                    className="h-[160px] border-2 object-cover rounded-lg md:h-[280px] 2xl:h-[520px]  "
                />
            </div>
            <div className='z-10 top-20  w-full h-full flex flex-col  '>
                <h1 className="text-4xl  font-bold  text-center ">{item.name}</h1>
                <div className='relative'>
                    <div className='flex  gap-4 mt-10 ml-4 text-xl'>
                        Content
                        <button onClick={() => toggleOverview(false)}>
                            <ClipboardType />
                        </button>
                    </div>
                    {
                        isOverviewVisible && (
                            <div
                                className=" absolute top-full mt-2 left-0 bg-gray-800 text-gray-200  p-4 rounded-lg shadow-lg w-full z-20"
                                onClick={() => setIsOverviewVisible(false)}
                            >
                                <div className="text-lg">{removePTags(item.content)}</div>
                            </div>
                        )
                    }
                </div>
                <div className='mt-10 gap-x-20 space-y-2 ml-4 text-xl md:flex gap-32'>
                    <div className=''>
                        Quality: {item.quality}
                    </div>
                    <div className=''>
                        Release: {item.year}
                    </div>
                    <div className=''>
                        Language: {item.lang}
                    </div>
                    <div className=''>
                        Duration: {item.time}
                    </div>
                </div>
                <div className='mt-10 gap-x-20 space-y-2 ml-4 text-xl md:flex gap-32'>
                    <div className=''>
                        Category: {item.category?.map((cate) => cate.name).join(", ")}
                    </div>
                    <div className=''>
                        Status: {item.status}
                    </div>
                </div>
                <div className='mt-10 gap-x-20 space-y-2 ml-4 text-xl md:flex gap-32'>
                    <div className=''>
                        Actor: {item.actor?.join(", ")}
                    </div>
                </div>
                <div className='mt-10 gap-x-20 space-y-2 ml-4 text-xl md:flex gap-32'>
                    <div className=''>
                        <p className=" mb-4">Episodes: {item.episode_total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo