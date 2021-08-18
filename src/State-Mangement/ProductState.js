import React,{createContext,useState} from 'react';

export const ProductState = createContext();
export const ProductStateProvider=(props)=>{
const [product,setProduct] = useState([]);

    return(
   <>
        <ProductState.Provider value={[product,setProduct]}>
          {props.children}
        </ProductState.Provider>
   </>
    )
};
