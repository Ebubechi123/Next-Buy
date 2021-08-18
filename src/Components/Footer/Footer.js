import React from 'react';
import { Link } from "react-router-dom";
import { Cart, Home, Store, User } from '../Icons/Icons';
import './Footer.css';
const Footer = () => {
    return ( 
        <>
        <footer className="footer">
            <div className="footer-links">
              <Link to="/">
              <Home />
              </Link>

               <Link to ="/">
               <Store/>
               </Link>

               <Link to="/cart">
               <Cart />
               </Link>
            
            <Link to="/">
            <User />
            </Link>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;