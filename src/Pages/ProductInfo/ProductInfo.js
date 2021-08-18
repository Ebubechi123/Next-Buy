
import React from 'react';
import { useHistory } from "react-router-dom";
// import { ProductState } from "../../State-Mangement/ProductState";
// import { ProductState, ProductStateProvider } from "../../State-Mangement/ProductState";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shoe from "../../Assets/Images/shoe1.jpeg";
import { NavBar } from "../../Components/Navigation/Navigation";
import { GoBack } from "../../Components/Icons/Icons";
import "./ProductInfo.css"

const ProductInfo = () => {
    let history = useHistory();

    const goback=()=>{
        history.goBack()
    }
    
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 900,
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        
      };

 return ( 
        <>
        <NavBar icon={<GoBack/>} event={goback} title="Product" />
       <section className="productinfo-section">
          <Slider {...settings}>
          <div className="product-image">
            <img src={Shoe} alt="product-img" />
           </div>
          <div className="product-image">
            <img src={Shoe} alt="product-img" />
           </div>
          <div className="product-image">
            <img src={Shoe} alt="product-img" />
           </div>
          </Slider>

          <div className="product-information">
            <div className="product-info-name">
              <p>Nike Shoe - <span>2 LEFT</span></p>
            </div>
            <div className="product-info-description">
                      <p>All stars black and white tote bag. 16 inches 
        and pure leather. Durable! space big ewrite</p>
            </div>
            <div className="product-info-price-tag">
              <span>NGN</span>
              <p>8000</p>
            </div>
          </div>



       </section>
        </>
     );
}
 
export default ProductInfo;