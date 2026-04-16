'use client'

import { useContext } from "react";
import { InstallContext } from "../context/InstallContextProvider";



const Button = ({product}) => {
const {cart,addtocart}=useContext(InstallContext);


  return (
   <div className="flex gap-4 mt-4">
      <button
        className="flex-1 bg-cyan-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-cyan-400 transition disabled:opacity-40"
        disabled={product.stock === 0}
      >
        Buy Now
      </button>

      <button
        onClick={()=>addtocart(product)}
        className="flex-1 border border-gray-600 text-gray-200 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Button;