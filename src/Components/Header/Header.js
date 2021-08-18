import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { MenuBar, Search, ShoppingBag } from '../Icons/Icons';
import Input from '../Input/Input';
import Navigation from '../Navigation/Navigation';
import "./Header.css";
import "./Header.mediaquery.css";


import BlueShirt  from "../../Assets/Images/Blue-Shirt.png";

import HandBag from "../../Assets/Images/Cloth on hanger.jpg";
const Header = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 900,
        dots: false,
        autoplay:true,
        autoplaySpeed: 3000,
        
      };


    return ( 
        <>
        <header>
           <div className="header">
           <div className="menu"><MenuBar /></div>
            <div className="site-logo">
                <h1>NEXAPP</h1>
                <ShoppingBag />
            </div>
           </div>


            <div className="search-container">
            <form>
                   <div className="search-input">
                   <div className="search-icon">
                      <Search className="icon" />
                      </div>
                        <div className="root">
                        <Input type="email" placeholder="Search" required />
                        </div>
                        </div>     
                   </form>
            </div>
                  
                <div className="navigation">
                    <Navigation />
                </div>
             <Slider {...settings}>
             <div className="header-banner shirt">
                    <div className="banner-description">
                        <div className="banner-title">
                            <span>Stylistic Shirts</span>
                        </div>
                        <div className="discount-box">
                            Up to 50% off
                        </div>
                        <div className="theme">
                            <span>Classic Man</span>
                        </div>
                    </div>
                   <div className="banner-img">
                   <img src={BlueShirt} alt="Banner Img" />
                   </div>
                </div>
             <div className="header-banner hanged-Shirt">
                    <div className="banner-description">
                        <div className="banner-title">
                            <span> Unique T-Shirts</span>
                        </div>
                        <div className="discount-box">
                            Up to 50% off
                        </div>
                        <div className="theme">
                            <span>Casual Men</span>
                        </div>
                    </div>
                    <div className="banner-img">
                   <img src={HandBag} alt="Banner Img" />
                   </div>
                </div>
             </Slider>
    
        </header>
        </>
     );
}
 
export default Header;