import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Flow1StepForm from './components/Flow1/Flow1StepForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flow1stepform" element={<Flow1StepForm />} />

      </Routes>
    </Router>
  );
}
export default App;

