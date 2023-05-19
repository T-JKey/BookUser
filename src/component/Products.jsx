import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import queryString from "query-string";
import Navbar from "./Navbar";

export default function () {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  // const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  //phân trang
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    totalRows: 1,
  });
  // xử lí api
  const [load, setLoad] = useState({
    page: 1,
    perPage: 10,
    q: "",
    
  });

  let cpnMount = true;

  useEffect(() => {
    const getProducts = async () => {
      const param = queryString.stringify(load);
      setLoading(true);
      const apilength = await axios.get(`https://thuvien.nemosoftware.net/api/v1/categories`);
      setCategory(apilength.data.data);
      const apilen = await axios.get( "https://thuvien.nemosoftware.net/api/v1/books");
      const legth = (load.id) > 0 ? apilength.data.meta.totalRows : apilen.data.meta.totalRows;
      const res = await fetch(`https://thuvien.nemosoftware.net/api/v1/books?${param}`);
      if (cpnMount) {
        const ress = await res.clone().json()
        setData(ress.data);
        setPagination({
          ...pagination,
          page: load.page,
          totalRows: legth,
 
        });
        setLoading(false);
      }
      return () => {
        cpnMount = false;
      };
    };
    getProducts();
  }, [load]);

  function handlePageChange(newPage) {
    setLoad({ ...load, page: newPage });
  }

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <div className="col-md-3 mx-2 mb-4" key={product.id}>
              <div className="card h-100 text-center p-2">
                <img
                  src={product.image}
                  className="card-img-top"
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0" title={product.name}>
                    {product.name.substring(0, 10)}...
                  </h5>
                  <p className="card-text" title={product.author}>{product.author.substring(0, 10)}...</p>
                  <p className="card-text">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  function handleCate(cat) {
    setLoad({ ...load, page: 1, category: cat });
  }
  const ShowCategory = () => {
    return (
      <>
        {category.map((cate) => {
          return (
            <button
              className="category-item__link"
              onClick={() => handleCate(cate.id)}
              key={cate.id}
            >
              {cate.name}
            </button>
          );
        })}
      </>
    );
  };

  return (

    <div>
      <Navbar/>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="text-center">LIST PRODUCTS</h1>
            <hr />
          </div>
        </div>
        <h6 style={{textAlign: "right", marginRight: "62px"}}> Có <strong style={{color:"#6366F1"}}>{pagination.totalRows}</strong> sản phẩm</h6>
        <div className="d-flex w-100">
          <div className="p-2 flex-shrink-0 ">
            <nav className="category">
              <h3 className="category__heading">Danh mục</h3>
              <button
                className="category-item__link"
                onClick={() => handleCate()}
              >
                All
              </button>
              {loading ? <Loading /> : <ShowCategory />}
            </nav>
          </div>
          <div className="d-flex flex-column w-100">
            <ProductHeader
              pagination={pagination}
              onPageChange={handlePageChange}
              setLoad={setLoad}
              Data={data}
            />
            <div className="p-2 w-100 d-flex flex-wrap justify-content-evenly ">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
