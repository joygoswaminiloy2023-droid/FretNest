

import { Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Products from "../page";
import Button from "@/app/components/Button";




const Product_Details = async({params}) => {
   const {productid}=await params;
const res=await fetch('http://localhost:3000/product.json');
const products=await res.json();




const product=products.find((p)=>p.id===Number(productid));
if(product){
 return (
   <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 py-12 px-4">

  {/* CENTER CONTAINER */}
  <div className="max-w-6xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

    {/* IMAGE SECTION */}
    <div className="bg-gray-950/40 flex items-center justify-center p-10">
      <div className="relative w-full h-[450px] hover:scale-105 transition duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* DETAILS SECTION */}
    <div className="p-10 flex flex-col justify-between text-white">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-bold leading-tight">
          {product.name}
        </h1>

        <p className="text-gray-400 mt-2 text-lg">
          {product.brand} • {product.type}
        </p>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="text-yellow-400" fill="currentColor" />
          <span className="text-gray-200 font-medium">
            {product.rating}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 leading-relaxed text-lg">
          {product.description}
        </p>
      </div>

      {/* PRICE + STOCK + BUTTON */}
      <div className="mt-10 space-y-4">

        <p className="text-4xl font-bold text-cyan-400">
          ${product.price}
        </p>

        <p
          className={`text-sm font-medium ${
            product.stock > 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {product.stock > 0
            ? `${product.stock} items available`
            : "Out of stock"}
        </p>

           

      </div>
       <Button product={product}></Button>

    </div>
  </div>
  <h1 className="text-4xl text-white">More products</h1>
<Products></Products>
</div>
    );
} 
else{
    return(
notFound()
    );
}
   
};

export default Product_Details;