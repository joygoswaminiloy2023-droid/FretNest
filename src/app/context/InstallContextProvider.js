"use client"
import { createContext, useState } from "react";


export const InstallContext=createContext();
const InstallContextProvider = ({children}) => {
    const [cart,setCart]=useState([]);
    const addtocart=(product)=>{
setCart((prev)=>[...prev,product])
    }
    return (
        <InstallContext.Provider value={{cart,addtocart}}>
            {children}
        </InstallContext.Provider>
    );
};

export default InstallContextProvider;