import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, baseUrl }) => {
    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 2); // Bắt đầu từ trang hiện tại - 2
        const endPage = Math.min(totalPages, currentPage + 2); // Kết thúc ở trang hiện tại + 2

        if (startPage > 1) {
            pages.push(
                <li key="start" className="mx-1">
                    <Link
                        to={`/${baseUrl}/page=1`}
                        className="px-3 py-1 border rounded-md hover:bg-blue-100"
                    >
                        1
                    </Link>
                    {startPage > 2 && <span className="px-2">...</span>}
                </li>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i} className={`mx-1 ${i === currentPage ? 'font-bold text-blue-600' : ''}`}>
                    <Link
                        to={`/${baseUrl}/${i}`}
                        className="px-3 py-1 border rounded-md hover:bg-blue-100"
                    >
                        {i}
                    </Link>
                </li>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="dots" className="px-2">...</span>);
            }
            pages.push(
                <li key={totalPages} className="mx-1">
                    <Link
                        to={`/${baseUrl}/${totalPages}`}
                        className="px-3 py-1 border rounded-md hover:bg-blue-100"
                    >
                        {totalPages}
                    </Link>
                </li>
            );
        }

        return pages;
    };

    return (
        <div className="flex justify-center mt-4">
            <ul className="flex list-none p-0">
                {currentPage > 1 && (
                    <li className="mx-1">
                        <Link
                            to={`/${baseUrl}/${currentPage - 1}`}
                            className="px-3 py-1 border rounded-md hover:bg-blue-100"
                        >
                            Previous
                        </Link>
                    </li>
                )}
                {renderPageNumbers()}
                {currentPage < totalPages && (
                    <li className="mx-1">
                        <Link
                            to={`/${baseUrl}/${currentPage + 1}`}
                            className="px-3 py-1 border rounded-md hover:bg-blue-100"
                        >
                            Next
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
