import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationDots = () => {
    const paginationDots = [];
    const visiblePages = 5; // Number of visible page dots

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        paginationDots.push(renderPaginationDot(i));
      }
    } else {
      const firstPage = 1;
      const lastPage = totalPages;

      let startPage = currentPage - Math.floor(visiblePages / 2);
      let endPage = currentPage + Math.floor(visiblePages / 2);

      if (startPage < firstPage) {
        endPage += Math.abs(startPage - firstPage);
        startPage = firstPage;
      }

      if (endPage > lastPage) {
        startPage -= Math.abs(endPage - lastPage);
        endPage = lastPage;
      }

      if (startPage > firstPage) {
        paginationDots.push(renderPaginationDot(firstPage));
        if (startPage > firstPage + 1) {
          paginationDots.push(<span key="ellipsis-start">...</span>);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        paginationDots.push(renderPaginationDot(i));
      }

      if (endPage < lastPage) {
        if (endPage < lastPage - 1) {
          paginationDots.push(<span key="ellipsis-end">...</span>);
        }
        paginationDots.push(renderPaginationDot(lastPage));
      }
    }

    return paginationDots;
  };

  const renderPaginationDot = (pageNumber) => {
    return (
      <span
        key={pageNumber}
        className={`pagination-dot ${
          currentPage === pageNumber ? "active" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </span>
    );
  };

  return (
    <div className="pagination">
      <button
        className="btn btn-primary"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </button>

      {renderPaginationDots()}

      <button
        className="btn btn-primary"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-right"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
