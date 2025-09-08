import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { stringToSlug } from './utils';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={`/${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`}> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
