type FeatureErrorFallbackProps = {
  error: Error;
  resetError: () => void;
  featureName?: string;
};

export function FeatureErrorFallback({ 
  error, 
  resetError, 
  featureName = 'this feature' 
}: FeatureErrorFallbackProps) {
  return (
    <div className="bg-white rounded-xl border border-red-200 p-8 text-center">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      
      <h2 className="text-lg font-bold text-slate-900 mb-2">
        Unable to load {featureName}
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        {error.message || 'An unexpected error occurred'}
      </p>
      
      <button
        onClick={resetError}
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Try again
      </button>
    </div>
  );
}
