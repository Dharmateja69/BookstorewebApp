import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AuthProider from './contex/AuthProider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProider>
   <div className="dark:bg-slate-900 dark:text-white">
      <App />
    </div>
   </AuthProider>
  </BrowserRouter>
);
