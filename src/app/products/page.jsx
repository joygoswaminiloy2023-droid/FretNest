import Product_card from "../components/Product_card";

const Products = async () => {
  const res = await fetch("http://localhost:3000/product.json",{cache:"no-store"});
  const products = await res.json();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-800 py-14">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Guitar Marketplace
        </h1>
        <p className="text-base text-gray-400 mt-3">
          Premium instruments crafted for every level
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Product_card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;