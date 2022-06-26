import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './components/helpers/context';
import './index.css';
import App from './App';
document.title = "micOn"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);