import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StrategiesPage from './pages/StrategiesPage';
import GovernancePage from './pages/GovernancePage';
import EuropeanApproachPage from './pages/EuropeanApproachPage';
import InvestorsPage from './pages/InvestorsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="App min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/strategies" element={<StrategiesPage />} />
                <Route path="/governance" element={<GovernancePage />} />
                <Route path="/european-approach" element={<EuropeanApproachPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
