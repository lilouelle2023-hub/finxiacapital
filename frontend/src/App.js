import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StrategiesPage from './pages/StrategiesPage';
import RiskManagementPage from './pages/RiskManagementPage';
import EuropeanApproachPage from './pages/EuropeanApproachPage';
import InvestorsPage from './pages/InvestorsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/strategies" element={<StrategiesPage />} />
              <Route path="/risk-management" element={<RiskManagementPage />} />
              <Route path="/european-approach" element={<EuropeanApproachPage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
