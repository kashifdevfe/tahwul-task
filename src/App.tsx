import { Routes, Route } from 'react-router-dom';
import { Dashboard, DigitalTransformationDetail } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details/digital-transformation" element={<DigitalTransformationDetail />} />
    </Routes>
  );
}

export default App;
