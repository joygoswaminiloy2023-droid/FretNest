     "use client";


const loading = () => {
    return (
  
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
    

export default loading;