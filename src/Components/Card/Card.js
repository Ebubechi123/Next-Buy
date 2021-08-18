import React,{useEffect} from 'react';
import  "./Card.css";
import { Cart } from '../Icons/Icons';
const Card = ({productname , productprice, product_account_name, productimage}) => {
    return ( 
        // key={productimage}
        <>
        <div key={()=>Math.random()*4000}  className="card">
            <div className="card-img">
            <img src={productimage} alt="" />
            </div>
            <div className="card-info">
                <div className="product-account_name">
                    <p>
                     {product_account_name}
                    </p>
                </div>

                <div className="product-name">
                    <p>{productname}</p>
                </div>
                <div className="product-crumb">
                    <div className="product-price">
                        <p>{productprice}</p>
                    </div>
                    <div className="product-cart">
                    <Cart className="cart" />
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Card;