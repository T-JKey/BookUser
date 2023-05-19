import React, {useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Navbar from './Navbar';
export default function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [display,setDisplay] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    useEffect(
        ()=>{
        const getProduct = async() =>{
            setDisplay(true);
            const res = await fetch(`https://thuvien.nemosoftware.net/api/v1/categories/${id}?relations=books`);
                setProduct(await res.json());
                setDisplay(false);
            
        }
        getProduct();
        },[id]
    );
    
    const Display = ()=>{
        return(
            <>
               <div className='text-center'>
                    Loading...
               </div>
            </>
        )
    };
    const Show = () =>{
        return(
            <>
                <Navbar/>
                <div className="col-md-6 mt-5">
                    <img src={product.image} alt={product.name} height="500px" width="400px"/>
                </div>
                <div className="col-md-6 mt-5">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.name}
                    </h1>
                    <p className="lead">
                        Gói {product.label}
                        <span className="fa fa-start"></span>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>ADD TO CART</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">GO TO CART</NavLink>
                </div> 
            </>
        )
    }

  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {display ? <Display/> : <Show/>}
            </div>
        </div>
    </div>
  )
}
