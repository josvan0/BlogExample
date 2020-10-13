import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
