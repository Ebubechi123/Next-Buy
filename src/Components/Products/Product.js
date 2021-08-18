import React,{useEffect,useContext} from 'react';
import { Link } from "react-router-dom";
import Card from '../Card/Card';
import "./Products.css";
import { Api } from "../../Fake Data/Api";
import { ProductState } from "../../State-Mangement/ProductState";
const Products = () => {
    const [product, setProduct] = useContext(ProductState);
    useEffect(()=>{
 
        setProduct(Api)
       console.log(product)
    })
    return ( 

        <>

        <section className="product-section">
            <div className="product-wrapper">
           {Api.map(product=>(
            <Link to="/productinfo">
                <Card key={product. product_Id} productname={product.product_Name} productprice={product.product_Price} product_account_name={product.product_Account_Name} productimage={product.product_Image} /></Link>
           ))}
            </div>
        </section>

        </>
     );
}
 
export default Products;