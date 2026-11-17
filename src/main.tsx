import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/tokens.css';
import './styles/typography.css';
import './styles/base.css';
import './styles/utilities.css';
import './styles/ui.css';
import './styles/layout.css';
import './styles/sections.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
