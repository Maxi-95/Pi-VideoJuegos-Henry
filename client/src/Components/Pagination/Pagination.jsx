import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({
  totalPost,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  const onPreviusPage = (e) => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = (e) => {
    setCurrentPage(currentPage + 1);
  };
  const onSepcificPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <div className={s.paginado}>
      <button
        disabled={`${currentPage === 1 ? "is-disabled" : ""}`}
        onClick={onPreviusPage}
        className={s.antSig}
      >
        Anterior
      </button>

      <div>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => onSepcificPage(page)}
              className={`${s.pageButton} ${
                page === currentPage ? s.active : ""
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        disabled={`${currentPage >= pages.length ? "is-disabled" : ""}`}
        onClick={onNextPage}
        className={s.antSig}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
