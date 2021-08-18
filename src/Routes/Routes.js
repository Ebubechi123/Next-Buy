import React from 'react';
import { Route } from "react-router-dom";
import Home from '../Pages/Home';
import ProductInfo from '../Pages/ProductInfo/ProductInfo';
const Routes = () => {
    return ( 
        <>
        <Route exact={true} path="/"component={Home} />
        <Route exact={true} path="/productinfo"component={ProductInfo} />
        
        </>
     );
}
 
export default Routes;
