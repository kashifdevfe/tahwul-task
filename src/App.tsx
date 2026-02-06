import { Routes, Route } from 'react-router-dom';
import { Dashboard, DigitalTransformationDetail } from './pages';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const logError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Application Error:', error);
    console.error('Error Info:', errorInfo);
  };

  return (
    <ErrorBoundary onError={logError}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/digital-transformation" element={<DigitalTransformationDetail />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
