/* eslint-disable react/prop-types */
import { createContext } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'KES';
    const delivery_fee = 100;

    const values = {
        products,
        currency,
        delivery_fee
    }

    console.log(values );
    
    return (
        <ShopContext.Provider value={values}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;