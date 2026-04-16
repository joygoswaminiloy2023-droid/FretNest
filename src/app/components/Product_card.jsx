
import { Star as StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Product_card = ({ product }) => {
 
  return (
    <Link
      href={`../products/${product.id}`}
      className="group card w-80 bg-base-100/80 backdrop-blur-md border border-base-300 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
    >
      <figure className="relative w-full h-52 bg-base-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold line-clamp-1">
          {product.name}
        </h2>

        <p className="text-sm text-base-content/60 line-clamp-1">
          {product.brand} • {product.type}
        </p>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>

          <span className="flex items-center gap-1 text-sm text-yellow-500">
            <StarIcon size={16} fill="currentColor" />
            {product.rating}
          </span>
        </div>

        <p className="text-xs text-base-content/50 mt-1">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        <div className="card-actions mt-4">
          <button 
            className="btn btn-primary btn-sm w-full rounded-xl"
            disabled={product.stock === 0}
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product_card;