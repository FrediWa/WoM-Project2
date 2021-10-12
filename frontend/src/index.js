import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/import.scss';
import App from './App';

// Import & Export components & pages for nicer App.js import one-liner
import Footer from './components/Footer';
import Header from './components/Header';
import AddService from './components/AddService';
import OrderedServices from './components/OrderedServices';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {
  Footer,
  Header,
  AddService,
  OrderedServices,
  Login,
  Dashboard
}