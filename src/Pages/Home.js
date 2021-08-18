import React from 'react';
import Header from '../Components/Header/Header';
import Products from '../Components/Products/Product';
import { ProductStateProvider } from "../State-Mangement/ProductState";

const Home = () => {
    return ( 

        <>
    <ProductStateProvider>
        <Header />
        <Products />
        </ProductStateProvider>
        </>
     );
}
 
export default Home;