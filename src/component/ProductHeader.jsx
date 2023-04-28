import React, { useState } from "react";
import PropTypes from "prop-types";
ProductHeader.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
ProductHeader.defaultProps = {
  onPageChange: null,
};
export default function ProductHeader(props){
  const { pagination, onPageChange,setLoad,Data} = props;
  const { _page, _limit, _totalRows } = pagination;
  const {load,  _sort,
    _order,} = setLoad;
  const totalPages = Math.ceil(_totalRows / _limit);

  // // console.log(Pagination);
  function handlePageChange(newPage) {
    // console.log("toto",totalPages);
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  function handleold() {
    setLoad({...pagination, _page: 1, status: "old"});
  }
  function handlenew() {
    setLoad({ ...pagination, _page: 1, status: "new"});
  }

  const sortAsc = () => {
    setLoad({...pagination,_page: 1,_sort:"price",_order:"asc" });
  };

  const sortDesc = () => {
    setLoad({...pagination,_page: 1,_sort:"price",_order:"desc" });
  };
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ height: "56px", margin: "0 5%" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Sắp xếp theo
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gói sách
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button class="dropdown-item"onClick={handleold} >
                    Gói: Sách old
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" onClick={handlenew} >
                    Gói: Sách new
                  </button>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Giá
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button class="dropdown-item" onClick={sortAsc} >
                    Giá: Thấp đến cao
                  </button>
                </li>
                <li>
                  <button class="dropdown-item"onClick={sortDesc}>
                    Giá: Cao đến thấp
                  </button>
                </li>
              </ul>
            </li>
          </ul>
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
        </div>
      </div>
    </nav>
  );
};


