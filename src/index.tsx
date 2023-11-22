import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/index';

import { Provider } from 'react-redux';
// import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import './i18n';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
