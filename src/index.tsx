import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SymbolsProvider } from './contexts/SymbolsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SymbolsProvider>
    <App />
    </SymbolsProvider>
  </React.StrictMode>
);

reportWebVitals();
