'use client'

const error = ({reset}) => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      
      <h2 className="text-2xl mt-4 font-semibold">
        Something went wrong 
      </h2>

      <p className="text-gray-600 mt-2">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Try Again
      </button>
    </div>
        </div>
    );
};

export default error;