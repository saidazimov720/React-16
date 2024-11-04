import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import VerificationPage from './components/VerificationPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
