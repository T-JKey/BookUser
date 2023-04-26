import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import ProductHeader from "./ProductHeader";
export default function () {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let cpnMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:8000/book");
      const resCategory = await fetch("http://localhost:8000/categories");
      if (cpnMount) {
        setData(await res.clone().json());
        setFilter(await res.clone().json());
        setCategory(await resCategory.clone().json());
        setLoading(false);
      }
      return () => {
        cpnMount = false;
      };
    };
    getProducts();
  }, []);

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
        {filter.map((product) => {
          return (
            <div className="col-md-3 mx-2 mb-4" key={product.id}>
              <div className="card h-100 text-center p-2">
                <img
                  src={product.img}
                  className="card-img-top"
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0" title={product.name}>
                    {product.name.substring(0, 12)}...
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
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

  const fitterProduct = (cat) => {
    const update = data.filter((index) => index.categoryId === cat);
    setFilter(update);
  };

  const ShowCategory = () => {
    return (
      <>
        {category.map((cate) => {
          return (
            <button
              className="category-item__link"
              onClick={() => fitterProduct(cate.id)}
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
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="text-center">LIST PRODUCTS</h1>
            <hr />
          </div>
        </div>

        <div className="d-flex">
          <div className="p-2 flex-shrink-0">
            <nav className="category">
              <h3 className="category__heading">Danh mục</h3>
              <button
                className="category-item__link"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              {loading ? <Loading /> : <ShowCategory />}
            </nav>
          </div>
          <div className="d-flex flex-column">
            <ProductHeader Data={data} Filters={setFilter}/>
            <div className="p-2 w-100 d-flex flex-wrap justify-content-evenly ">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
