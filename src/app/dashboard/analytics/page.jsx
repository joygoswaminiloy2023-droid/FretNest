import Linechart from "@/app/components/Linechart";
import Pieproduct from "@/app/components/Pieproduct";
import Salasegraph from "@/app/components/Salasegraph";

const Analytics = async () => {
  const res = await fetch("https://fret-nest.vercel.app//product.json",{cache:"no-store"});
  const analytics = await res.json();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 w-full
     to-gray-800 p-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Sales Analytics
        </h1>
        <p className="text-gray-400 mt-3">
          Overview of product performance and stock distribution
        </p>
      </div>

      <div className="w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

          <div className="bg-gray-900/60 border border-gray-700 rounded-3xl p-6 shadow-xl backdrop-blur-md hover:scale-[1.01] transition">
            <h2 className="text-cyan-300 text-lg font-semibold mb-4">
              Product Insights
            </h2>

            <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 gap-6 items-center">
              <Pieproduct a={analytics} />
              <Linechart a={analytics} />
            </div>
          </div>

          <div className="bg-gray-900/60 border border-gray-700 rounded-3xl p-6 shadow-xl backdrop-blur-md hover:scale-[1.01] transition">
            <h2 className="text-cyan-300 text-lg font-semibold mb-4">
              Sales Performance
            </h2>

            <Salasegraph a={analytics} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;