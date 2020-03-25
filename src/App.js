import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Welcome path="/" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
