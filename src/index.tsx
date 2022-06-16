import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FaleConosco from './pages/contato';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FaleConosco/>
  </React.StrictMode>
);
