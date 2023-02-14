import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import data from './assets/data/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
console.log(data);
