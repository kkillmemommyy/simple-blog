import { usePagination } from "../../../hooks/usePagination";
import { memo } from "react";

export const Pagination = memo(({ totalPages, currentPage, togglePage }) => {
  const pages = usePagination(totalPages);

  return (
    <div className="pagination">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => togglePage(p)}
          className={p === currentPage ? "page currentPage" : "page"}
        >
          {p}
        </button>
      ))}
    </div>
  );
});
