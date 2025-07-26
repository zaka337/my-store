import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold text-dark-text mb-6">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-primary-pink text-light-text px-6 py-3 rounded-full hover:bg-secondary-purple transition-colors duration-300 text-lg font-semibold">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
