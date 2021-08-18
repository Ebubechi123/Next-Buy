import React from 'react';
import "./Navigation.css"
import "./Navigation.mediaquery.css"
const Navigation = () => {
    return ( 
        <>
        <nav>
           <div className="nav-links">
               
            <ul>
          <li className="active">Home</li>
          <li>Trending</li>
          <li>Catergories</li>
          <li>Early Access</li>
          <li>Specials</li>  
            </ul>   
            </div> 
        </nav>
        </>
     );
}
 
export default Navigation;



// Nav bar for pages other than home page
export const NavBar =({title,icon,event})=>{
  return(
    <>
    <nav className="nav-bar">
     <p onClick={event} className="icon"> {icon}</p>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </nav>
    </>
  )
}