import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const sentence = 'Hello my friend!'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

