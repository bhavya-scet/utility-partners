import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import ExplorePage from './pages/ExplorePage.tsx';
import LegalPage from './pages/LegalPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route
          path="/privacy"
          element={
            <LegalPage
              title="Privacy Policy"
              description="We respect your privacy and handle personal information responsibly."
            />
          }
        />
        <Route
          path="/terms"
          element={
            <LegalPage
              title="Terms of Service"
              description="These terms define acceptable usage of this brand experience."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
