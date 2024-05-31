import React from "react";

import "./Pagination.css";

const Pagination = ({
  totalReviews,
  reviewsPerPage,
  setCurrentPage,
  currentPage,
}: any) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index + Math.random()}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
