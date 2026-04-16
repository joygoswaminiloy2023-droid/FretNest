"use client";

import { useContext, useState } from "react";
import { InstallContext } from "../context/InstallContextProvider";
import { ShoppingBag } from "lucide-react";


const Page = () => {
  const { cart } = useContext(InstallContext);

    const totalPrice = cart?.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-5xl  font-bold mb-6">Your Cart</h1>

        {cart?.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item,ind) => (
              <div
                key={ind}
                className="flex items-center justify-between border rounded-xl p-3 hover:shadow-md transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <p className="text-xs text-gray-500">{item.brand}</p>
                    <p className="text-sm font-medium text-green-600">
                      ${item.price}
                    </p>
                  </div>
                
                </div>

                {/* Right */}
                <button className="text-sm text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg transition">
                  Remove
                </button>
               
              </div>
            ))}
          </div>
        ) : (
          <p className=" flex items-center justify-center flex-col-reverse text-gray-500 text-5xl py-10">
            Your cart is empty <ShoppingBag size={50}></ShoppingBag>
          </p>
        )}
         <p className="text-right font-bold text-xl mt-10 text-green-600">Total Price:{totalPrice}</p>
      </div>
      
    </div>
  );
};

export default Page;