import React from "react";

const Thankyou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center">
        <svg
          className="w-20 h-20 text-green-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M16 24l6 6 10-10"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
            fill="none"
          />
        </svg>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          We appreciate your action. Your submission has been received
          successfully.
          <br />
          If you have any questions, feel free to contact us.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform font-semibold"
        >
          Go Back
        </button>
      </div>
      <footer className="mt-8 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Thankyou;
