import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Page not found</p>
        <p className="text-lg mt-2">
          The page you are looking for might be in another universe.
        </p>
        <Link to={'/'}>
          <button className="h-10 w-20 bg-slate-500 rounded-lg border-2 border-green mt-10">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
