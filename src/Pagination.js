import React from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  nextPage,
  currentPage,
  previousPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousButton =
    currentPage === pageNumbers[0] ? null : (
      <button onClick={previousPage}>{"<"}</button>
    );

  const nextButton =
    currentPage === pageNumbers.length ? null : (
      <button onClick={nextPage}>{">"}</button>
    );

  return (
    <div>
      {previousButton}
      {currentPage} sur {pageNumbers.length}
      {nextButton}
    </div>
  );
};

export default Pagination;