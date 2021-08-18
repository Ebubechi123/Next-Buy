import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag,faSearch,faBars, faHome, faShoppingCart,faUser,faStore,faSuitcase,faArrowLeft,faRulerHorizontal} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBag,faSearch,faBars,faHome,faShoppingCart,faUser,faStore,faSuitcase,faArrowLeft,faRulerHorizontal);

export const ShoppingBag=()=>{
return(
    <FontAwesomeIcon icon="shopping-bag" />
)
};





export const Search=()=>{
return(
    <FontAwesomeIcon icon="search" />
)
}

export const MenuBar=()=>{
return(
    <FontAwesomeIcon icon="bars" />
)
}
export const Home=()=>{
return(
    <FontAwesomeIcon icon="home" />
)
}
export const Cart=()=>{
return(
    <FontAwesomeIcon icon="shopping-cart" />
)
}
export const User=()=>{
return(
    <FontAwesomeIcon icon="user" />
)
}
export const Store=()=>{
return(
    <FontAwesomeIcon icon="suitcase" />
)
}
export const GoBack=()=>{
return(
    <FontAwesomeIcon icon="arrow-left" />
)
}