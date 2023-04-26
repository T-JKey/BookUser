
import React from 'react'

const ProductHeader = ({Data, Filters}
) => {

  const SortASC = () => {
    const asc = Data.sort((a, b) => a.price - b.price)
    Filters(asc)
    console.log("esscccccc", asc);

  }

  const SortDESC = () => {
    const desc = Data.sort((a, b) => b.price - a.price)
    Filters(desc)
    console.log("dessccccccc", desc);
  }

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
                          <button class="dropdown-item" >
                            Gói: Sách FREE
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" >
                            Gói: Sách VIP
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
                          <button class="dropdown-item" onClick={SortASC}>
                            Giá: Thấp đến cao
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" onClick={SortDESC}>
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
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </nav>
  )
}

export default ProductHeader