import React from "react";
import { Link } from "react-router";

function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              CivicEye Portal
            </h2>
            <p className="text-gray-600 mb-8">
              Select your role to continue
            </p>
          </div>

          <div className="space-y-3">
            <Link
              to="/auth/user"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Citizen Login
            </Link>

            <Link
              to="/auth/admin"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md bg-green-600 text-white font-medium text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
