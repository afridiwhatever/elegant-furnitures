import React from "react";

interface PaginationProps {
  totalElements: number;
  elementPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalElements,
  elementPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="mt-4 flex flex-wrap justify-center">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 font-semibold text-lg mx-2 rounded-md cursor-pointer transition-all duration-300 ease-linear ${
            page === currentPage
              ? "bg-yellow-400  font-extrabold"
              : "bg-transparent text-gray-200 "
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
