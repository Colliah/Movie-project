// import React, { useEffect, useState } from 'react';
// import Overlay from './Overlay';
// import useDebounce from '../hooks/useDebounce';
// import { Search, X } from 'lucide-react';
// import Loading from './Loading';
// import { searchApi } from '../api/search';
// import { Link } from 'react-router-dom';
// import FilmCard from './FilmCard';

// const path = "https://img.ophim.live/uploads/movies/";

// const SearchSite = ({ isSearchOpen, setIsSearchOpen, toggleSearchSite }) => {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);
//     const debouncedQuery = useDebounce(query, 300);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (debouncedQuery.trim() === "") {
//             setLoading(false);
//             setResults([]);
//             return;
//         }
//         const fetchSearch = async () => {
//             setLoading(true);
//             try {
//                 const res = await searchApi.search(debouncedQuery);
//                 setResults(res.data.items);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSearch();
//     }, [debouncedQuery]);

//     const handleCloseSearch = () => {
//         toggleSearchSite();
//         setQuery("");
//     };

//     return (
//         <Overlay
//             isOpen={isSearchOpen}
//             onClose={() => setIsSearchOpen(false)}
//             position="center"
//         >
//             <div className="relative bg-white h-[68%] sm:h-[75%] md:h-[80%] lg:h-[85%] xl:h-[90%] w-[90%] sm:w-[80%] md:w-[72%] lg:w-[65%] xl:w-[60%] p-4 flex flex-col items-center space-y-6 rounded-lg border dark:bg-black">

//                 {/* Close button */}
//                 <div
//                     onClick={handleCloseSearch}
//                     className="absolute top-2 right-2 transition-transform duration-300 text-black hover:rotate-90 dark:text-white "
//                 >
//                     <X size={32} />
//                 </div>

//                 {/* Search input */}
//                 <div className="flex justify-between items-center text-black border border-black rounded-xl w-full sm:w-[80%] md:w-[70%] lg:w-[60%] overflow-hidden p-2 dark:border-white dark:text-white">
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className="w-full outline-none dark:text-white dark:bg-black"
//                         placeholder='Movie name ?'
//                     />
//                     <Search />
//                 </div>

//                 {/* Search results text */}
//                 <div className="text-black dark:text-white">
//                     {query.trim() === "" ? (
//                         "Not searched yet"
//                     ) : (
//                         <>
//                             Search results for "<span className="font-semibold">{query}</span>"
//                         </>
//                     )}
//                 </div>

//                 {/* Results grid */}
//                 <div className="relative h-full w-full overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
//                     {loading ? (
//                         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                             <Loading />
//                         </div>
//                     ) : (
//                         <>
//                             {results.map((result, index) => (
//                                 <div
//                                     key={index}
//                                     onClick={handleCloseSearch}
//                                     className='w-52'
//                                 >
//                                     <FilmCard
//                                         items={index}
//                                         path={`/detail-mov/${result.slug}`}
//                                         name={result.name}
//                                         slug={result.slug}
//                                         image={`${path}${result.thumb_url}`}
//                                     />
//                                 </div>
//                             ))}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </Overlay>
//     );
// };

// export default SearchSite;
