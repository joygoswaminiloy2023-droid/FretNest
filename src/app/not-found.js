import Link from "next/link";


const notfound = () => {
    return (
        <div>
             <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found 😢
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
        </div>
    );
};

export default notfound;