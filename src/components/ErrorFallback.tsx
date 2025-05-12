import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle size={48} className="text-amber-500" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Something went wrong
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          {error.message || 'An unexpected error occurred'}
        </p>
        <div className="flex justify-center">
          <button
            onClick={resetErrorBoundary}
            className="btn btn-primary"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;