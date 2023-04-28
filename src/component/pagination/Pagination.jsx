import React, { useState } from "react";

import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

export default function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  // // console.log(Pagination);
  function handlePageChange(newPage) {
    // console.log("toto",totalPages);
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex align-items-center ms-auto"
    >
      <ul class="pagination m-0">
        <li class="page-item">
          <button
            class="page-link"
            aria-label="Previous"
            onClick={() => handlePageChange(_page - 1)}
            disabled={ _page === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            {_page}
          </a>
        </li>
        <li class="page-item">
          <button
            class="page-link"
            aria-label="Next"
            onClick={() => handlePageChange(_page + 1)}
            disabled={ _page === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
