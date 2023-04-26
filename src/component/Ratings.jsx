import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Raitings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getRaitings = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRaitings();
  }, []);

  const sortidPeople = data.sort((a, b) => a.id - b.id);
  const topFivePeople = sortidPeople.slice(0, 5);

  const TopFive = () => {
    return (
      <>
        {topFivePeople.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-2" key={product.id}>
                  <img
                    src={product.img}
                    className="card-img-top mb-0"
                    alt={product.name}
                    height="350px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-primary">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
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
            <h1 className="display-6 fw-bolder text-center">
              Featured products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <TopFive />
        </div>
      </div>
    </div>
  );
};

export default Raitings;
