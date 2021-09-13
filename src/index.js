import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextApi from './Component/Result/Style'

ReactDOM.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>,
  document.getElementById('root')
);